from django.contrib import admin
from .models import InsurancePayerDetails



@admin.register(InsurancePayerDetails)
class InsurencePayerDetAdmin(admin.ModelAdmin):
    list_display=['insurance_payer_name','insurance_payer_code','address_details']