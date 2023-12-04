from django.core.mail import send_mail
from django.conf import settings
from rest_framework.views import APIView
from rest_framework import status
from rest_framework.response import Response
from .models import Appointment, ContactDetails
from .serializers import AppointmentModelSerializer, ContactDetailsModelSerializer , IsApprovedAppointment
from django.shortcuts import get_object_or_404
from django.db.models import Subquery
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework.permissions import IsAuthenticated



class ContactAPIView(APIView):
    
    def get(self, request):
        contacts = ContactDetails.objects.all()
        serializer = ContactDetailsModelSerializer(contacts, many=True)
        return Response(data=serializer.data, status=status.HTTP_200_OK)
    
    def post(self, request):
        serializer = ContactDetailsModelSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            contact_instance = serializer.save()
            contact_id = contact_instance.contact_details_id
            print(contact_id)
            return Response(data=serializer.data, status=status.HTTP_201_CREATED)
        return Response(data=serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class AppointmentAPIView(APIView):

    def get(self, request):
        appointments = Appointment.objects.all()
        serializer = AppointmentModelSerializer(appointments, many=True)
        return Response(data=serializer.data, status=status.HTTP_200_OK)
        
    def post(self, request):
        serializer = AppointmentModelSerializer(data=request.data)
        if serializer.is_valid():
            instance = serializer.save()
            print(instance.appointment_identifier)
            appointment_id = instance.appointment_identifier
            
            if appointment_id is not None:
                contact_details = serializer.validated_data.get('contact_details')
                to_email = contact_details.email_identifier
                
                from_email = settings.EMAIL_HOST_USER
                subject = 'Applying For Appointment'
                message = f'You can check your appointment status with this appointment ID: {appointment_id}'
                send_mail(subject, message, from_email, [to_email])
                
                return Response(data=serializer.data, status=status.HTTP_201_CREATED)
            return Response(data={"error": "Invalid data for appointment creation"}, status=status.HTTP_400_BAD_REQUEST)
        return Response(data=serializer.errors, status=status.HTTP_400_BAD_REQUEST)




# Dropdowns
### check appointment status


class CheckAppointmentStatus(APIView):
    def get(self, request, appointment_identifier):
        try:
            appointment = Appointment.objects.get(appointment_identifier=appointment_identifier)
            astatus = appointment.a_status 
            return Response({"status": astatus},status=status.HTTP_200_OK)
        except Appointment.DoesNotExist:
            return Response({"error": "Appointment not found"}, status=status.HTTP_404_NOT_FOUND)



### for checking approved appointent



class CheckApproveAppointment(APIView):
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated, IsApprovedAppointment]

    def get(self, request):
        try:
            # Filter for approved appointments
            approved_appointments = Appointment.objects.filter(a_status='approved')
            
            # Serialize the approved appointments
            serializer = AppointmentModelSerializer(approved_appointments, many=True)
            
            return Response(serializer.data, status=status.HTTP_200_OK)
        except Appointment.DoesNotExist:
            return Response({"error": "No approved appointments found"}, status=status.HTTP_404_NOT_FOUND)



        
    
##check pendding appointment list
class CheckPendingAppointment(APIView):
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated, IsApprovedAppointment]

    def get(self, request):
        try:
            # Filter for pending appointments
            pending_appointments = Appointment.objects.filter(a_status='pending')

            # Serialize the pending appointments
            serializer = AppointmentModelSerializer(pending_appointments, many=True)

            return Response(serializer.data, status=status.HTTP_200_OK)
        except Appointment.DoesNotExist:
            return Response({"error": "No pending appointments found"}, status=status.HTTP_404_NOT_FOUND)



###for approve appointment

class ApproveAppointmentView(APIView):
    authentication_classes=[JWTAuthentication]
    permission_classes=[IsAuthenticated,]
    def get(self, request, appointment_identifier):
        try:
            appointment = Appointment.objects.get(appointment_identifier=appointment_identifier)
        except Appointment.DoesNotExist:
            return Response({"error": "Appointment not found"}, status=status.HTTP_404_NOT_FOUND)

        if appointment.a_status == "pending":
            print(appointment.a_status)
            appointment.a_status = "approved"
            print(appointment.a_status)

            appointment.save()
            print(appointment.a_status)
            return Response({"message": "Appointment approved successfully"}, status=status.HTTP_200_OK)
        else:
            return Response({"error": "Appointment is not in pending status"}, status=status.HTTP_400_BAD_REQUEST)
        
    



#for delete appointment

class DeleteAppointmentView(APIView):
    authentication_classes=[JWTAuthentication]
    permission_classes=[IsAuthenticated,]
    def get(self, request, pk=None):
        if pk:
            # If a specific 'pk' is provided, try to retrieve and serialize the appointment
            try:
                appointment = Appointment.objects.get(appointment_identifier=pk)
                serializer = AppointmentModelSerializer(appointment)
                return Response(serializer.data, status=status.HTTP_200_OK)
            except Appointment.DoesNotExist:
                return Response({"error": "Appointment not found"}, status=status.HTTP_404_NOT_FOUND)
        else:
            # If 'pk' is not provided, retrieve and serialize all appointments
            appointments = Appointment.objects.all()
            serializer = AppointmentModelSerializer(appointments, many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)

    def delete(self, request, pk):
        try:
            appointment = Appointment.objects.get(appointment_identifier=pk)
            appointment.delete()
            return Response({"message": "Appointment deleted successfully"}, status=status.HTTP_204_NO_CONTENT)
        except Appointment.DoesNotExist:
            return Response({"error": "Appointment not found or already deleted"}, status=status.HTTP_404_NOT_FOUND)






### API FOR CONTACTDETAILS AND APPOINMENT ONE TO ONE RELATIONSHIP

class ContactPhoneAPIView(APIView):
    def get(self, request):
        # Get all contact details from ContactDetails
        contact_details = ContactDetails.objects.all()

        # Get contact details associated with appointments
        appointment_contact_details = Appointment.objects.values_list('contact_details__contact_details_id', flat=True)
        
        # Get remaining contact details that are not associated with any appointments
        remaining_contact_details = contact_details.exclude(contact_details_id__in=Subquery(appointment_contact_details))

        # Serialize the contact details
        serializer = ContactDetailsModelSerializer(remaining_contact_details, many=True)

        # Return the serialized data in the response
        return Response(serializer.data)