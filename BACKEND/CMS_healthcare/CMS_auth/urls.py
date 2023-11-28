from django.conf import settings
from rest_framework.urls import path
from .views import *
from django.conf.urls.static import static
from . import views
from django.urls import reverse


urlpatterns = [
    path('user/',RegisterAPIView.as_view()),
    path('user/<int:pk>/', RegisterAPIView.as_view(), name='update-user'),
    #path('user/<int:pk>/patch/', RegisterAPIView.as_view(), name='patch-user'),
    path('user/<int:pk>/', RegisterAPIView.as_view(), name='delete_user_api'),
    path('loginpage/',LoginAPIView.as_view()),
    path(
        "password-request",
        views.PasswordReset.as_view(),
        name="request-password",
    ),
    # path(
    #     "password-reset/<str:encoded_pk>/<str:token>/",
    #     views.ResetPasswordAPI.as_view(),
    #     name="reset-password",
    # ),
    path('password-reset/<str:uidb64>/<str:token>/', ResetPasswordAPI.as_view(), name='reset-password'),
    

    #path('/api/password-reset/<str:uidb64>/<str:token>/', views.ResetPasswordAPI.as_view()),
   # path('password-reset/', PasswordResetView.as_view(), name='password_reset'),
  
]