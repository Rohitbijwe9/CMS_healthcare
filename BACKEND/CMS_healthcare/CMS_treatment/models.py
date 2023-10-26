from django.db import models
from CMS_patient_registration.models import Claim,Patient




class Disease(models.Model):
    disease_identifier = models.BigAutoField(primary_key=True)
    patient_code = models.CharField(max_length=20)
    disease_name = models.CharField(max_length=50)
    disease_category = models.CharField(max_length=50)
    denied_reason = models.CharField(max_length=50)
    is_disease_covered = models.BooleanField(default=False)
    patient = models.ForeignKey(Patient, on_delete=models.CASCADE, related_name='person_diseases')
    claim = models.ForeignKey(Claim, on_delete=models.CASCADE, related_name='claim_disease')



class DiseaseDocument(models.Model):
    disease_document_identifier = models.BigAutoField(primary_key=True)
    disease_document_name = models.CharField(max_length=50)
    disease_document_file = models.FileField(upload_to='disease_document/')
    disease = models.ForeignKey(Disease, on_delete=models.CASCADE, related_name='disease_document')



