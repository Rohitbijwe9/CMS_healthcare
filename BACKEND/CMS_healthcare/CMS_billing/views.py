from django.shortcuts import render
from rest_framework.views import APIView
from .models import NomineeDetails, InsurancePayerDetails, Insurance
from .serializers import NomineeDetailsSerializers, InsurancePayerDetailsSerializers, InsuranceSerializers
from rest_framework import status
from rest_framework.response import Response


# Create your views here.



class NomineeDetailsApiView(APIView):
    def get(self, request):
        nominee = NomineeDetails.objects.all()
        serializer = NomineeDetailsSerializers(nominee, many=True)
        return Response(data=serializer.data, status=status.HTTP_200_OK)
    
    def post(self, request):
        serializer = NomineeDetailsSerializers(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(data=serializer.data)
        return Response(data=serializer.errors)



class InsurancePayerDetailsApiView(APIView):
    def get(self, request):
        insurance_payer = InsurancePayerDetails.objects.all()
        serializer = InsurancePayerDetailsSerializers(insurance_payer, many=True)
        return Response(data=serializer.data, status=status.HTTP_200_OK)
    
    def post(self, request):
        serializer = InsurancePayerDetailsSerializers(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(data=serializer.data)
        return Response(data=serializer.errors)



class InsuranceApiView(APIView):
    def get(self, request):
        insurance = Insurance.objects.all()
        serializer = InsuranceSerializers(insurance, many=True)
        return Response(data=serializer.data, status=status.HTTP_200_OK)
    
    def post(self, request):
        serializer = InsuranceSerializers(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(data=serializer.data)
        return Response(data=serializer.errors)
    

