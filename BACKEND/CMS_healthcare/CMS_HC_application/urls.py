from django.urls import path
#from CMS_.views import ContactAPIview,AppontmentAPIView
from CMS_HC_application.views import ContactAPIView,AppointmentAPIView,CheckAppointmentStatus,CheckApproveAppointment,CheckPendingAppointment,ApproveAppointmentView,DeleteAppointmentView,ContactPhoneAPIView



urlpatterns=[
    path('contactview/',ContactAPIView.as_view()),
    path('Appointmentview/',AppointmentAPIView.as_view()),
    path('checkstatus/<int:appointment_identifier>/', CheckAppointmentStatus.as_view(), name='check_status'),
    path('checkapprove/',CheckApproveAppointment.as_view()),
    path('checkpending/',CheckPendingAppointment.as_view()),
    path('approveappointment/<int:appointment_identifier>/',ApproveAppointmentView.as_view()),
    path('deleteappointment/<int:pk>/', DeleteAppointmentView.as_view(), name='delete_approved_appointment'),

     path('f_user_ids/',ContactPhoneAPIView.as_view()),



]
