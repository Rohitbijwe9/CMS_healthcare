from .models import BankDetails,Claim,ClaimDocument,Patient
from rest_framework import serializers



#BankDetails Model
class BankDetailsModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = BankDetails
        fields = '__all__'




#Claim Model

class ClaimModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Claim
        fields=['insurance_code','patient_first_name','patient_last_name','patient_middle_name','patient_code',
                'patient_prefix','patient_suffix','patient_gender','patient_age_years','patient_age_months',
                'patient_age_days','patient_isprimary','patient_isrider','patient_occupation',
                'service_provider_name',' service_provider_code','admitted_reason','disease_start_date'
                ,'admission_date','discharge_date','police_reported','fir_attached','pre_hospital_period'
                'post_hospital_period','doctor_name','doctor_qualification','doctor_mobile_no','type_of_admission',
                 ' total_claim_amount','discharge_status','abuse_injury','alcohol_injury','abuse_report','alcohol_report',
                 'claim_place','claim_date','claim_status','claim_number','claim_PDF','patients_add_details','room_category',
                 ' contact_details','insurance_payer_details',' bank_details']
        


# ClaimDocumentModel


class ClaimDocumentModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = ClaimDocument 
        fields='__all__'


#


class PatientModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Patient
        fields = '__all__'





