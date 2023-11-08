from django.contrib import admin
from .models import ContactDetails,Appointment


@admin.register(ContactDetails)
class ContactDetailsAdmin(admin.ModelAdmin):
    list_display=['contact_details_id','mobile_number','alternate_mobile_number','email_identifier','alternate_email_identifier']

@admin.register(Appointment)
class Appointment(admin.ModelAdmin):
    list_display=['appointment_identifier','appointment_date','appointment_time','reason_of_appointment','appointment_for','contact_details','a_status']
    