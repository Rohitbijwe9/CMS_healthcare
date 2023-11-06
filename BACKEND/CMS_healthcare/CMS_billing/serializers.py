from rest_framework import serializers
from .models import NomineeDetails, InsurancePayerDetails, Insurance



class NomineeDetailsSerializers(serializers.ModelSerializer):
    class Meta:
        model = NomineeDetails
        fields = [
            'nominee_name',
            'relation_with_insurance_payer',
            'nominee_date_of_birth',
            'nominee_mobile_number',
        ]




class InsurancePayerDetailsSerializers(serializers.ModelSerializer):
    class Meta:
        model = InsurancePayerDetails
        fields = [
            'insurance_payer_name',
            'insurance_payer_code',
            'address_details',
        ]




class InsuranceSerializers(serializers.ModelSerializer):
    class Meta:
        model = Insurance
        fields = [
            'patient_code',
            'insurance_start_date',
            'insurance_end_date',
            'insurance_sum_insured',
            'is_primary',
            'is_rider',
            'insurance_policy_term',
            'insurance_premium_amount',
            'insurance_policy_name',
            'is_cashless',
            'nominee_details',
            'insurance_payer_details',
        ]