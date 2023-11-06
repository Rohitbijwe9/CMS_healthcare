from django.db import models
from django.contrib.auth.models import AbstractUser
#from CMS_patient_registration.models import ContactDetails
#from CMS_patient_sheduling.models import ServiceProvider


class User(AbstractUser):
    USER_TYPE=[('Admin','Admin'),
               ('Doctor','Doctor'),
               ('Receptionist','Receptionist'),
               ('Nurse','Nurse'),
               ('Wardboy','Wardboy'),]
    user_identifier=models.CharField(max_length=50)
    first_name = models.CharField(max_length=70)
    last_name = models.CharField(max_length=70)
    username = models.CharField(max_length=50,unique=True)
    password = models.CharField(max_length=100)
    email=models.EmailField(max_length=20)
    user_type = models.CharField(max_length=20,choices=USER_TYPE,default='Admin')
    user_code = models.CharField(max_length=20,unique=True)
    user_image = models.ImageField(upload_to='user/',blank=True)
    is_active = models.BooleanField(default=True)
    created_on = models.DateTimeField(auto_now_add=True,editable=False)
   # contact_details = models.OneToOneField(ContactDetails,on_delete=models.CASCADE,related_name='contact_details')
    #service_provider = models.ForeignKey(ServiceProvider,on_delete=models.CASCADE,related_name='service_provider')
    updated_on = models.DateTimeField(blank=True,null=True)
    