from django.db import models
from phonenumber_field.modelfields import PhoneNumberField
from CMS_auth.models import User



class ContactDetails(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)       #add to db
    contact_details_id = models.BigAutoField(primary_key=True)
    mobile_number = PhoneNumberField(region='IN')
    alternate_mobile_number = PhoneNumberField(region='IN')
    email_identifier = models.EmailField(blank=True, null=True)
    alternate_email_identifier = models.EmailField(blank=True, null=True)

class Appointment(models.Model):
    appointment_identifier=models.BigAutoField(primary_key=True)
    appointment_date=models.DateField()
    appointment_time=models.TimeField()
    reason_of_appointment=models.TextField()
    appointment_for=models.CharField(max_length=70)
    contact_details=models.OneToOneField(ContactDetails,on_delete=models.CASCADE,related_name='appointment_contact_details')
    