from django.db import models
from CMS_patient_registration.models import AddressDetails,Claim
from CMS_HC_application.models import ContactDetails

class ServiceProvider(models.Model):
    service_provider_identifier = models.BigAutoField(primary_key=True)
    service_provider_name = models.CharField(max_length=50)
    service_provider_code = models.CharField(max_length=20)
    hospital_identifier = models.CharField(max_length=20)
    hospital_type = models.CharField(max_length=20)
    hospital_registration_number= models.CharField(max_length=20,unique=True)
    address_details = models.OneToOneField(AddressDetails,on_delete=models.CASCADE,related_name='address_details')
    contact_details = models.OneToOneField(ContactDetails,on_delete=models.CASCADE,related_name='contact_details')
    
    

    

class RoomCategory(models.Model):
    ROOM_CATEGORY_NAME = [
        ('icu','icu'),
        ('general_ward','general_ward'),
        ('special_ward','special_ward')
    ]

    room_category_identifier = models.BigAutoField(primary_key=True)
    room_category_name = models.CharField(max_length=20,choices=ROOM_CATEGORY_NAME,default='general_ward')
    service_provider = models.ForeignKey(ServiceProvider,on_delete=models.CASCADE,related_name='serviceprovider')
    claim = models.OneToOneField(Claim,on_delete=models.CASCADE,related_name='room_claim')

