from rest_framework import serializers
from .models import DiseaseDetail

class DiseaseDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = DiseaseDetail
        fields = '__all__'
