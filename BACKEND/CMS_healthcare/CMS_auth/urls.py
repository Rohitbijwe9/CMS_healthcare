from django.conf import settings
from rest_framework.urls import path
from .views import *
from django.conf.urls.static import static

urlpatterns = [
    path('signup/',RegisterAPIView.as_view()),
    path('loginpage/',LoginAPIView.as_view()),
]
