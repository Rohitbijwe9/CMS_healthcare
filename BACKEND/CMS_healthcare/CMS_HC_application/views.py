from django.core.mail import send_mail
from django.conf import settings
from rest_framework.views import APIView
from rest_framework import status
from rest_framework.response import Response
from .models import Appointment, ContactDetails
from .serializers import AppointmentModelSerializer, ContactDetailsModelSerializer

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
                subject = 'Applying For Appointment'
                message = f'You can check your appointment status with this appointment ID: {appointment_id}'
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

