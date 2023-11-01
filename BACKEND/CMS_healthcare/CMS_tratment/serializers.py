from rest_framework import serializers
from .models import Disease, DiseaseDocument

 
class DiseaseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Disease
        fields = '__all__'


class DiseaseDocumentSerializer(serializers.ModelSerializer):
    class Meta:
        model = DiseaseDocument
        fields = '__all__'
