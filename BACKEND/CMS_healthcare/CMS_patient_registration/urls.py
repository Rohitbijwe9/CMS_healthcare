from django.urls import path
from .views import ClaimApiView,ClaimDocumentApiView,BankDetailsApiView
from django.conf.urls.static import static
from django.conf import settings



urlpatterns=[
    path('bankdetails/',BankDetailsApiView.as_view()),
    path('claim/',ClaimApiView.as_view()),
    path('claim_doc/',ClaimDocumentApiView.as_view())

]

if settings.DEBUG:
    urlpatterns+=static(settings.MEDIA_URL,document_root=settings.MEDIA_ROOT)