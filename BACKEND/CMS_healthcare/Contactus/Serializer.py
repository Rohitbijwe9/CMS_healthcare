from rest_framework import serializers
from .models import Massage


class MassageModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Massage
        fields='__all__'
