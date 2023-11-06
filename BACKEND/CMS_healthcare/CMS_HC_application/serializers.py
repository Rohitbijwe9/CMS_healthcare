from rest_framework import serializers
from .models import Appointment,ContactDetails


#appointment model serializer

class AppointmentModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Appointment
        fields = ['appointment_identifier','appointment_date','appointment_time','reason_of_appointment','appointment_for','contact_details']
        #fields='__all__'


class ContactDetailsModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactDetails
        fields = ['mobile_number','alternate_mobile_number','email_identifier','alternate_email_identifier']
        