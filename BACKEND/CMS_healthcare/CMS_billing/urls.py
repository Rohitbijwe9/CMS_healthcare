from django.urls import path
from .views import  InsurancePayerDetailsApiView,ServiceProviderBillAPIView,ServiceProviderBillClaim,ServiceProviderBillSerivceAPIView,HospitalExpensesAPIView,HospitalExpensessCliam,NomineeDetailsApiView,InsuranceApiView,InsurenceAddressAPIView,InsuranceNomineeAPIView,InsuranceInsurancePayerAPIView,TransactionDetailsView,LedgerAPIView,PaymentInfoAPIView
from django.conf.urls.static import static
from django.conf import settings




urlpatterns = [
    path('insurencepayerdetails/', InsurancePayerDetailsApiView.as_view()),
    path('ServiceProviderbill/',ServiceProviderBillAPIView.as_view(),name='ServiceProvider'),
    path('serviceproviderbillclaim/',ServiceProviderBillClaim.as_view()),
    path('serviceproviderbillservice/',ServiceProviderBillSerivceAPIView.as_view()),
    path('hospitalexpenses/',HospitalExpensesAPIView.as_view()),


    path('hospitalexpensessclaim/',HospitalExpensessCliam.as_view()),

    path('nomineedetails/', NomineeDetailsApiView.as_view()),
    path('insurence/', InsuranceApiView.as_view()),
    path('insurancepayeraddress/', InsurenceAddressAPIView.as_view()),
    path('insurancenominee/', InsuranceNomineeAPIView.as_view()),
    path('insinsurancepayerdetails/', InsuranceInsurancePayerAPIView.as_view()),
    path('tran_detail/',TransactionDetailsView.as_view()),
    path('Ledger/',LedgerAPIView.as_view(),name='Ledger'),
    path('PaymentInfo/',PaymentInfoAPIView.as_view(),name='PaymentInfo'),




    


]


if settings.DEBUG:
    urlpatterns+=static(settings.MEDIA_URL,document_root=settings.MEDIA_ROOT)