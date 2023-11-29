from django.shortcuts import render
from django.shortcuts import render
from rest_framework.views import APIView
from .models import NomineeDetails, InsurancePayerDetails, Insurance,ServiceProviderBill,HospitalExpenses,TransactionDetails,Ledger,PaymentInfo
from .serializers import  InsurancePayerDetailsSerializers,ServiceProviderBillModelSerializer,HospitalExpensesModelSerializer,NomineeDetailsSerializers,InsuranceSerializers,TransactionDetailslModelSerializer,LedgerModelSerializer,PaymentInfoModelSerializer
from rest_framework import status
from rest_framework.response import Response
from CMS_patient_sheduling.models import ServiceProvider
from CMS_patient_registration.models import Claim,AddressDetails
from CMS_patient_sheduling.serializer import ServiceProviderModelSerializer
from CMS_patient_registration.serializer import ClaimModelSerializer
from django.db.models import Subquery
from django.db.models import Subquery, OuterRef
from CMS_patient_registration.serializer import AddressDetailsModelSerializer



class HospitalExpensesAPIView(APIView):
    def get(self, request):
        hospitalExpenses = HospitalExpenses.objects.all()
        serializer = HospitalExpensesModelSerializer(hospitalExpenses,many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    def post(self, request):
        serializer = HospitalExpensesModelSerializer(data=request.data)
        if serializer.is_valid():
             serializer.save()
             return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
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
    

class LedgerAPIView(APIView):
    def get(self, request):
        Ledgers = Ledger.objects.all()
        serializer = LedgerModelSerializer(Ledgers, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
        
    
    def post(self, request):
        serializer = LedgerModelSerializer(data=request.data)
        if serializer.is_valid():
             serializer.save()
             return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    

class PaymentInfoAPIView(APIView):
    def get(self, request):
        PaymentInfos = PaymentInfo.objects.all()
        serializer = PaymentInfoModelSerializer(PaymentInfos, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
        
    
    def post(self, request):
        serializer = PaymentInfoModelSerializer(data=request.data)
        if serializer.is_valid():
             serializer.save()
             return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)








class ServiceProviderBillAPIView(APIView):
    def get(self, request):
        ServiceProviderBills = ServiceProviderBill.objects.all()
        serializer = ServiceProviderBillModelSerializer(ServiceProviderBills, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    

    
    def post(self, request):
        serializer = ServiceProviderBillModelSerializer(data=request.data)
        if serializer.is_valid():
             serializer.save()
             return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    

class TransactionDetailsView(APIView):
    def get(self, request):
        TransactionDetailss = TransactionDetails.objects.all()
        serializer = TransactionDetailslModelSerializer(TransactionDetailss, many=True)
        return Response(serializer.data)

    def post(self,request):
        serializer = TransactionDetailslModelSerializer(data=request.data)
        if serializer.is_valid():
             serializer.save()
             return Response(data=serializer.data)
        return Response(data=serializer.errors)
    









# class InsurancePayerDetailsApiView(APIView):
#     def get(self, request):
#         insurance_payer = InsurancePayerDetails.objects.all()
#         serializer = InsurancePayerDetailsSerializers(insurance_payer, many=True)
#         return Response(data=serializer.data, status=status.HTTP_200_OK)
    
#     def post(self, request):
#         serializer = InsurancePayerDetailsSerializers(data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(data=serializer.data)
#         return Response(data=serializer.errors)

    





    
#####  Dropdowns


class ServiceProviderBillSerivceAPIView(APIView):
        def get(self, request):
            service_provider_data = ServiceProvider.objects.all()
            serializer = ServiceProviderModelSerializer(service_provider_data,many=True)
            print(serializer.data)
            return Response(serializer.data)



class ServiceProviderBillClaim(APIView):
    def get(self, request):
        claim_data = Claim.objects.all()
        serializer = ClaimModelSerializer(claim_data,many=True)
        print(serializer.data)
        return Response(serializer.data)
    

class HospitalExpensessCliam(APIView):
    def get(self, request):
        # Annotate each Claim instance with the associated hospital expenses identifier
        claims = Claim.objects.annotate(
            associated_hospital_expenses=Subquery(
                HospitalExpenses.objects.filter(claim=OuterRef('claim_id')).values('claim')[:1]
            )
        )

        # Filter out the claims that have an associated hospital expenses
        remaining_claims = claims.filter(associated_hospital_expenses__isnull=True)

        # Serialize the remaining claims
        serializer = ClaimModelSerializer(remaining_claims, many=True)

        # Return the serialized data in the response
        return Response(serializer.data)
    




    



class InsurenceAddressAPIView(APIView):
    def get(self, request):
        # Get all AddressDetails
        all_address_details = AddressDetails.objects.all()
        print('all address details--', all_address_details)

        # Get patient IDs associated with address
        insurance_with_address = InsurancePayerDetails.objects.filter(address_details__isnull=False)
        insurance_payer_data = insurance_with_address.values_list('address_details__addpatients_details_id', flat=True)
        print('patient ids with associated address--', insurance_payer_data)

        # Get remaining AddressDetails that are not associated with any patient
        remaining_address_details = all_address_details.exclude(addpatients_details_id__in=Subquery(insurance_payer_data))
        print('remaining address details--', remaining_address_details)

        # Serialize the remaining_address_details
        serializer = AddressDetailsModelSerializer(remaining_address_details, many=True)

        return Response(serializer.data)
    




class InsuranceNomineeAPIView(APIView):
    def get(self, request):
        # Get all NomineeDetails
        all_nominee_details = NomineeDetails.objects.all()
        print('all nominee details--', all_nominee_details)

        # Get patient IDs associated with nominee details
        insurance_with_nominee = Insurance.objects.filter(nominee_details__isnull=False)
        insurance_payer_data = insurance_with_nominee.values_list('nominee_details__insurance_identifier', flat=True)
        print('patient ids with associated nominee details--', insurance_payer_data)

        # Get remaining NomineeDetails that are not associated with any patient
        remaining_nominee_details = all_nominee_details.exclude(nominee_details_indentifier__in=Subquery(insurance_payer_data))
        print('remaining nominee details--', remaining_nominee_details)

        # Serialize the remaining_nominee_details
        serializer = NomineeDetailsSerializers(remaining_nominee_details, many=True)

        return Response(serializer.data)




class InsuranceInsurancePayerAPIView(APIView):
    def get(self, request):
        # Get all InsurancePayerDetails
        all_insurance_payer_details = InsurancePayerDetails.objects.all()
        print('all insurance payer details--', all_insurance_payer_details)

        # Get insurance identifiers associated with nominee details
        insurance_payers_with_nominee = Insurance.objects.filter(nominee_details__isnull=False)
        insurance_payer_data = insurance_payers_with_nominee.values_list('insurance_payer_details__insurance_payer_identifer', flat=True)
        print('insurance identifiers associated with nominee details--', insurance_payer_data)

        # Get remaining InsurancePayerDetails that are not associated with any insurance
        remaining_insurance_payer_details = all_insurance_payer_details.exclude(insurance_payer_identifer__in=Subquery(insurance_payer_data))
        print('remaining insurance payer details--', remaining_insurance_payer_details)

        # Serialize the remaining_insurance_payer_details
        serializer = InsurancePayerDetailsSerializers(remaining_insurance_payer_details, many=True)

        return Response(serializer.data)