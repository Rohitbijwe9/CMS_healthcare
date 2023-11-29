from . models import ServiceProvider
from rest_framework import serializers




class ServiceProviderModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = ServiceProvider
        fields='__all__'   