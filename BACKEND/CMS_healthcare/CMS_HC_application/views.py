from django.core.mail import send_mail
from django.conf import settings
from rest_framework.views import APIView
from rest_framework import status
from rest_framework.response import Response
from .models import Appointment, ContactDetails
from .serializers import AppointmentModelSerializer, ContactDetailsModelSerializer,  IsApprovedAppointment
from django.shortcuts import get_object_or_404



class ContactAPIView(APIView):
    def get(self, request):
        contacts = ContactDetails.objects.all()
        serializer = ContactDetailsModelSerializer(contacts, many=True)
        return Response(data=serializer.data, status=status.HTTP_200_OK)
    
    def post(self, request):
        serializer = ContactDetailsModelSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
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
                subject = 'Appointment application'
                message = f'Thank you for your application,\n\
                            You can check your appointment status with this appointment ID: {appointment_id} \n\
                            Team CMS Healthcare \n\
                            +91-1800-0000-00 \n\
                            care@cmshealthcare.com'
                send_mail(subject, message, from_email, [to_email])
                
                return Response(data=serializer.data, status=status.HTTP_201_CREATED)
            return Response(data={"error": "Invalid data for appointment creation"}, status=status.HTTP_400_BAD_REQUEST)
        return Response(data=serializer.errors, status=status.HTTP_400_BAD_REQUEST)





class CheckAppointmentStatus(APIView):
    def get(self, request, appointment_identifier):
        try:
            appointment = Appointment.objects.get(appointment_identifier=appointment_identifier)
            astatus = appointment.a_status 
            return Response({"status": astatus},status=status.HTTP_200_OK)
        except Appointment.DoesNotExist:
            return Response({"error": "Appointment not found"}, status=status.HTTP_404_NOT_FOUND)
        




class CheckApproveAppointment(APIView):
   
    permission_classes = [IsApprovedAppointment]

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
   
    permission_classes = [IsApprovedAppointment]

    def get(self, request):
        try:
            # Filter for approved appointments
            pending_appointments = Appointment.objects.filter(a_status='pending')
            
            # Serialize the approved appointments
            serializer = AppointmentModelSerializer(pending_appointments, many=True)
            
            return Response(serializer.data, status=status.HTTP_200_OK)
        except Appointment.DoesNotExist:
            return Response({"error": "No pending appointments found"}, status=status.HTTP_404_NOT_FOUND)
        
    





###for approve appointment

class ApproveAppointmentView(APIView):
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
