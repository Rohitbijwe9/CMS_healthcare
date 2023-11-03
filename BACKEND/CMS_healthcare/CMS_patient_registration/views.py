from django.shortcuts import render
from rest_framework.views import APIView
from .models import BankDetails,Claim,ClaimDocument
from .serializer import BankDetailsModelSerializer,ClaimDocumentModelSerializer,ClaimModelSerializer
from rest_framework import status
from rest_framework.response import Response




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



     


         


      
        


