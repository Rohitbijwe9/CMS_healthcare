from django.contrib import admin
from .models import ServiceProvider


@admin.register(ServiceProvider)
class ServiceproviderAdmin(admin.ModelAdmin):
    list_display=['user','service_provider_identifier','service_provider_name','service_provider_code',
                  'hospital_identifier','hospital_type','hospital_registration_number','address_details','contact_details']
    
