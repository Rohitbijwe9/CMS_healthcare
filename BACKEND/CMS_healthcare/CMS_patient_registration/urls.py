from django.urls import path
from .views import ClaimApiView,ClaimDocumentApiView,BankDetailsApiView,PatientApiView,PatientDetAPI,ClaimcontactAPIView,ClaimBankDetailsAPIView,ClaimInsurancePayerDetailsAPI,AddressDetailsApiView,ClaimAdressAPIView,ClaimdocumentclaimAPI,PatientContactAPIView,PatientAddressAPIView
from django.conf.urls.static import static
from django.conf import settings



urlpatterns=[
    path('bankdetails/',BankDetailsApiView.as_view()),
    path('claim/',ClaimApiView.as_view()),
    path('claim_doc/',ClaimDocumentApiView.as_view()),
    path('patient/',PatientApiView.as_view()),
    path('patient/<int:pk>/',PatientDetAPI.as_view()),
    path('add_detail/',AddressDetailsApiView.as_view()),


    #for claim
    path('claimidapi/',ClaimcontactAPIView.as_view()),
    path('claimbank/',ClaimBankDetailsAPIView.as_view()),
    path('claiminsurencepay/',ClaimInsurancePayerDetailsAPI.as_view()),
    path('claimadd/',ClaimAdressAPIView.as_view()),


    #for claimdoc
    path('claimdocclaim/',ClaimdocumentclaimAPI.as_view()),


    #for patient
    path('patientcont/',PatientContactAPIView.as_view()),
    path('patientadress/',PatientAddressAPIView.as_view())



]

if settings.DEBUG:
    urlpatterns+=static(settings.MEDIA_URL,document_root=settings.MEDIA_ROOT)