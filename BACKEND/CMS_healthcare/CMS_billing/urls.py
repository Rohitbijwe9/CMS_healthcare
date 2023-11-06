from django.urls import path
from .views import NomineeDetailsApiView, InsurancePayerDetailsApiView, InsuranceApiView
from django.conf.urls.static import static
from django.conf import settings




urlpatterns = [
    path('nomineedetails/', NomineeDetailsApiView.as_view()),
    path('insurencepayerdetails/', InsurancePayerDetailsApiView.as_view()),
    path('insurence/', InsuranceApiView.as_view()),
]


if settings.DEBUG:
    urlpatterns+=static(settings.MEDIA_URL,document_root=settings.MEDIA_ROOT)
    