from django.contrib import admin
from . models import BankDetails,ClaimDocument,Claim,AddressDetails,RoomCategory

@admin.register(AddressDetails)
class AdressDetailsAdmin(admin.ModelAdmin):
    list_display=['addpatients_details_id','addpatients_linel','addpatients_line2','landmark',
                  'area','town','city','state','pincode']


@admin.register(BankDetails)
class BankdetailsAdmin(admin.ModelAdmin):
    list_display=['pancard_number','account_number','bank_name','branch_name','ifsc_code']


@admin.register(Claim)
class ClaimAdmin(admin.ModelAdmin):
    list_display=['insurance_code','patient_first_name','patient_last_name','patient_middle_name',
                  'patient_code','patient_prefix','patient_suffix','patient_gender','patient_gender',
                  'patient_age_years','patient_age_months','patient_age_days','patient_isprimary',
                  'patient_isrider','service_provider_name','service_provider_code',
                  'admitted_reason','disease_start_date','admission_date','discharge_date','police_reported',
                  'fir_attached','pre_hospital_period','post_hospital_period','doctor_name','doctor_qualification',
                  'doctor_mobile_no','type_of_admission','total_claim_amount','discharge_status',
                  'abuse_injury','alcohol_injury','abuse_report','alcohol_report','claim_place',
                  'claim_date','claim_status','claim_number','claim_PDF','patients_add_details',
                  'contact_details','insurance_payer_details','bank_details']


@admin.register(ClaimDocument)
class ClaimdocumentAdmin(admin.ModelAdmin):
    list_display=['claim_name','claim_code','claim']


@admin.register(RoomCategory)
class RoomCatAdmin(admin.ModelAdmin):
    list_display=['room_category_name','service_provider','claim']

