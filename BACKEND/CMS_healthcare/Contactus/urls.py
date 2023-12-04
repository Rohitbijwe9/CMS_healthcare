from django.urls import path
from .views import MassageApiView


urlpatterns=[
    path('massage/',MassageApiView.as_view())
]