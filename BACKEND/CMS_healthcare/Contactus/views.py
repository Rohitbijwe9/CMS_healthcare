from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Massage
from .Serializer import MassageModelSerializer





class MassageApiView(APIView):
    def get(self,request):
        massage = Massage.objects.all()
        serializer =MassageModelSerializer(massage,many=True)
        return Response(data=serializer.data,status=status.HTTP_200_OK)
    
    def post(self,request):
        serializer = MassageModelSerializer(data=request.data)
        if serializer.is_valid():
             serializer.save()
             return Response(data=serializer.data)
        return Response(data=serializer.errors)