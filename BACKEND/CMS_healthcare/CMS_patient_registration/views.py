from django.shortcuts import render
from rest_framework.views import APIView
from .models import BankDetails,Claim,ClaimDocument,Patient,AddressDetails
from .serializer import BankDetailsModelSerializer,ClaimDocumentModelSerializer,ClaimModelSerializer,PatientModelSerializer,AddressDetailsModelSerializer
from rest_framework import status
from rest_framework.response import Response
from django.shortcuts import get_object_or_404
from CMS_HC_application.models import ContactDetails
from django.db.models import Subquery
from CMS_billing.models import InsurancePayerDetails
from CMS_HC_application.serializers import ContactDetailsModelSerializer
from CMS_patient_registration.serializer import AddressDetailsModelSerializer,BankDetailsModelSerializer
from CMS_billing.serializers import InsurancePayerDetailsSerializers



class AddressDetailsApiView(APIView):
    def get(self, request):
        AddressDetailss = AddressDetails.objects.all()
        serializer = AddressDetailsModelSerializer(AddressDetailss, many=True)
        return Response(serializer.data)

    def post(self,request):
        serializer = AddressDetailsModelSerializer(data=request.data)
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




## Dropdowns

#### for claim dropdown



## API FOR CLAIM AND CONTCT DETAILS ID


class ClaimcontactAPIView(APIView):
    def get(self, request):
        # Get all contact IDs from ContactDetails
        contact_details = ContactDetails.objects.values('contact_details_id', 'mobile_number', 'alternate_mobile_number')
        print('contact details--', contact_details)

        # Get contact IDs associated with claims
        claim_contact_ids = Claim.objects.values_list('contact_details__contact_details_id', flat=True)
        print('claim contact ids--', claim_contact_ids)

        # Get remaining contact IDs that are not associated with any claims
        remaining_contact_details = ContactDetails.objects.exclude(contact_details_id__in=Subquery(claim_contact_ids)).values('contact_details_id', 'mobile_number', 'alternate_mobile_number')
        print('remaining---', remaining_contact_details)

        # Serialize the contact details
        serializer = ContactDetailsModelSerializer(remaining_contact_details, many=True)

        # Return the serialized data in the response
        return Response(serializer.data)
    


class ClaimAdressAPIView(APIView):
    def get(self, request):
        # Get all AddressDetails
        all_address_details = AddressDetails.objects.all()
        print('all address details--', all_address_details)

        # Get claim IDs associated with address
        claims_with_address = Claim.objects.filter(patients_add_details__isnull=False)
        claim_ids = claims_with_address.values_list('claim_id', flat=True)
        print('claim ids with associated address--', claim_ids)

        # Get remaining AddressDetails that are not associated with any claim
        remaining_address_details = all_address_details.exclude(addpatients_details_id__in=Subquery(claim_ids))
        print('remaining address details--', remaining_address_details)

        # Serialize the remaining_address_details
        serializer = AddressDetailsModelSerializer(remaining_address_details, many=True)

        return Response(serializer.data)


class ClaimBankDetailsAPIView(APIView):
    def get(self, request):
        # Get all BankDetails objects
        all_bank_details = BankDetails.objects.all()
        print('all bank details--', all_bank_details)

        # Get claim IDs associated with bank
        claim_ids = Claim.objects.values_list('bank_details__bank_details_identifier', flat=True)
        print('claim bank ids--', claim_ids)

        # Get remaining BankDetails objects that are not associated with any claim
        remaining_bank_details = all_bank_details.exclude(bank_details_identifier__in=Subquery(claim_ids))
        print('remaining bank details---', remaining_bank_details)

        # Serialize the remaining bank details
        serializer = BankDetailsModelSerializer(remaining_bank_details, many=True)
        
        # Convert the serialized data to a list of dictionaries
        data_list = [dict(item) for item in serializer.data]

        return Response(data_list)

    

class ClaimInsurancePayerDetailsAPI(APIView):
    def get(self, request):
        # Get all Insurance Payer objects
        all_insurance_payers = InsurancePayerDetails.objects.all()
        print('all insurance payers--', all_insurance_payers)

        # Get claim IDs associated with insurance payer
        claims_with_insurance_payer = Claim.objects.filter(insurance_payer_details__isnull=False)
        claim_ids = claims_with_insurance_payer.values_list('claim_id', flat=True)
        print('claim ids with associated insurance payer--', claim_ids)

        # Get remaining Insurance Payer objects that are not associated with any claim
        remaining_insurance_payers = all_insurance_payers.exclude(insurance_payer_identifer__in=Subquery(claim_ids))
        print('remaining insurance payers---', remaining_insurance_payers)

        # Serialize the remaining insurance payer data
        serializer = InsurancePayerDetailsSerializers(remaining_insurance_payers, many=True)
        
        # Convert the serialized data to a list of dictionaries
        data_list = [dict(item) for item in serializer.data]

        return Response(data_list)
    
##### for claimdocument dropdown

class ClaimdocumentclaimAPI(APIView):
    def get(self, request):
        # Retrieve all Claim objects from the database
        claim_data = Claim.objects.all()

        # Serialize the Claim objects using the serializer
        serializer = ClaimModelSerializer(claim_data, many=True)

        # Print the serialized data for debugging
        print(serializer.data)

        # Return the serialized data as a JSON response
        return Response(serializer.data)
    
#### For patient dropdown


class PatientAddressAPIView(APIView):
    def get(self, request):
        # Get all AddressDetails
        all_address_details = AddressDetails.objects.all()
        print('all address details--', all_address_details)

        # Get patient IDs associated with address
        patients_with_address = Patient.objects.filter(patients_add_details__isnull=False)
        patient_ids = patients_with_address.values_list('patients_add_details__addpatients_details_id', flat=True)
        print('patient ids with associated address--', patient_ids)

        # Get remaining AddressDetails that are not associated with any patient
        remaining_address_details = all_address_details.exclude(addpatients_details_id__in=Subquery(patient_ids))
        print('remaining address details--', remaining_address_details)

        # Serialize the remaining_address_details
        serializer = AddressDetailsModelSerializer(remaining_address_details, many=True)

        return Response(serializer.data)
    
    
class PatientContactAPIView(APIView):
    def get(self, request):
        # Get all contact IDs from ContactDetails
        contact_details = ContactDetails.objects.values('contact_details_id', 'mobile_number', 'alternate_mobile_number')
        print('contact details--', contact_details)

        # Get contact IDs associated with patients
        patient_contact_ids = Patient.objects.values_list('contact_details__contact_details_id', flat=True)
        print('patient contact ids--', patient_contact_ids)

        # Get remaining contact IDs that are not associated with any patients
        remaining_contact_details = ContactDetails.objects.exclude(contact_details_id__in=Subquery(patient_contact_ids)).values('contact_details_id', 'mobile_number', 'alternate_mobile_number')
        print('remaining---', remaining_contact_details)

        # Serialize the contact details
        serializer = ContactDetailsModelSerializer(remaining_contact_details, many=True)

        # Return the serialized data in the response
        return Response(serializer.data)
    



