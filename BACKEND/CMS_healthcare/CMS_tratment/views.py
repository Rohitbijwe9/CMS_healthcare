from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated


from .models import Disease, DiseaseDocument
from .serializers import DiseaseSerializer, DiseaseDocumentSerializer

class DiseaseByPatientIDView(APIView):
    permission_classes = [IsAuthenticated]
    def get(self, request, patient_id):
        # Check user's role (Doctor, Receptionist, Nurse)
        user = request.user  # Assuming you have user roles configured

        # You can implement role-based access control logic here.
        # For example, check if the user is a Doctor, Receptionist, or Nurse.
        # Based on their role, allow or deny access to the view.

        # Assuming user is authorized, fetch disease details for the patient.
        diseases = Disease.objects.filter(patient_id=patient_id)
        serializer = DiseaseSerializer(diseases, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


class DiseaseDocumentView(APIView):
    permission_classes = [IsAuthenticated]
    def get(self, request, patient_id):
        # Check user's role (Doctor or Nurse)
        user = request.user  # Assuming you have user roles configured

        # You can implement role-based access control logic here.
        # For example, check if the user is a Doctor or Nurse.
        # Based on their role, allow or deny access to the view.

        # Assuming user is authorized, fetch Disease Documents for the patient.
        disease_documents = DiseaseDocument.objects.filter(disease__patient_id=patient_id)
        serializer = DiseaseDocumentSerializer(disease_documents, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)





