from django.urls import path
#from CMS_.views import ContactAPIview,AppontmentAPIView
from CMS_HC_application.views import ContactAPIView,AppointmentAPIView,CheckAppointmentStatus


urlpatterns=[
    path('contactview/',ContactAPIView.as_view()),
    path('Appointmentview/',AppointmentAPIView.as_view()),
    path('checkstatus/<int:appointment_identifier>/', CheckAppointmentStatus.as_view(), name='check_status'),

]
