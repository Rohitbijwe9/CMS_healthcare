from django.shortcuts import render
from rest_framework.views import APIView
from .models import BankDetails,Claim,ClaimDocument,Patient
from .serializer import BankDetailsModelSerializer,ClaimDocumentModelSerializer,ClaimModelSerializer,PatientModelSerializer
from rest_framework import status
from rest_framework.response import Response
from django.shortcuts import get_object_or_404





class BankDetailsApiView(APIView):
        def get(self,request):
            bank=BankDetails.objects.all()
            serializer=BankDetailsModelSerializer(bank,many=True)
            return Response(data=serializer.data,status=status.HTTP_200_OK)
        
        def post(self,request):
              serializer=BankDetailsModelSerializer(data=request.data)
              if serializer.is_valid():
                    serializer.save()
                    return Response(data=serializer.data)
              return Response(data=serializer.errors)
        
class ClaimApiView(APIView):
    def get(self,request):
        claim = Claim.objects.all()
        serializer = ClaimModelSerializer(claim,many=True)
        return Response(data=serializer.data,status=status.HTTP_200_OK)
    
    def post(self,request):
        serializer = ClaimModelSerializer(data=request.data)
        if serializer.is_valid():
             serializer.save()
             return Response(data=serializer.data)
        return Response(data=serializer.errors)
    

class ClaimDocumentApiView(APIView):
     def get(self,request):
        claimdoc = ClaimDocument.objects.all()
        serializer = ClaimDocumentModelSerializer(claimdoc,many=True)
        return Response(data=serializer.data,status=status.HTTP_200_OK)
     
     def post(self,request):
        serializer = ClaimDocumentModelSerializer(data=request.data)
        if serializer.is_valid():
             serializer.save()
             return Response(data=serializer.data)
        return Response(data=serializer.errors)



class PatientApiView(APIView):
     def get(self,request):
        patient = Patient.objects.all()
        serializer = PatientModelSerializer(patient,many=True)
        return Response(data=serializer.data,status=status.HTTP_200_OK)
     
     def post(self,request):
        serializer = PatientModelSerializer(data=request.data)
        if serializer.is_valid():
             serializer.save()
             return Response(data=serializer.data)
        return Response(data=serializer.errors)
     

class PatientDetAPI(APIView):
    def get(self,request,pk=None):
        patients = get_object_or_404(Patient,pk=pk)
        serializer = PatientModelSerializer(patients)
        return Response(data=serializer.data)

    def put(self,request,pk=None):
        post = get_object_or_404(Patient,personal_identifier=pk)
        serializer = PatientModelSerializer(data=request.data, instance=post ,partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(data=serializer.data)
        return Response(data=serializer.errors)    
    
    def patch(self,request,pk=None):
        patients = get_object_or_404( Patient,personal_identifier=pk)
        serializer = PatientModelSerializer(data=request.data, instance=patients ,partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(data=serializer.data)
        return Response(data=serializer.errors)   

    def delete(self,request,pk=None):
        patient=get_object_or_404(Patient,personal_identifier=pk)
        patient.delete()
        return Response(data=None) 


     


         


      
        


