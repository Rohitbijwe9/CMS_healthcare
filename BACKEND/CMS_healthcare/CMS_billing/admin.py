from django.contrib import admin
from .models import ServiceProviderBill, NomineeDetails
# Register your models here.


# admin.site.register(ServiceProviderBill)

@admin.register(ServiceProviderBill)
class ServiceProviderBillAdmin(admin.ModelAdmin):
    list_display = []
