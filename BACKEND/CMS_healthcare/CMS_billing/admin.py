from django.contrib import admin
from .models import ServiceProviderBill, NomineeDetails, InsurancePayerDetails
# Register your models here.




@admin.register(ServiceProviderBill)
class ServiceProviderBillAdmin(admin.ModelAdmin):
    list_display = []






@admin.register(InsurancePayerDetails)
class InsurencePayerDetAdmin(admin.ModelAdmin):
    list_display=['insurance_payer_name','insurance_payer_code','address_details']
