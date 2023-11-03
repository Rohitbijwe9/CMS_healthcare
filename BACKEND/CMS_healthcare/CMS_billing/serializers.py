from rest_framework import serializers
from . models import HospitalExpenses



class HospitalModelSerializer(serializers.ModelSerializer):
    class Meta:
        fields=['pre_hospital_expenses','hospital_expenses','post_hospital_expenses','health_check_cost','ambulance_charges','other_charges','total_charges','service_provider_code','claim']