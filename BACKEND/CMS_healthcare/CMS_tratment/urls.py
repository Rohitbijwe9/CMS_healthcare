from django.urls import path
from .views import DiseaseByPatientIDView, DiseaseDocumentView

urlpatterns = [
    # Add your other URL patterns here

    path('disease-by-patient/<int:patient_id>/', DiseaseByPatientIDView.as_view(), name='disease-by-patient'),
    path('disease-documents/<int:patient_id>/', DiseaseDocumentView.as_view(), name='disease-documents'),

]




