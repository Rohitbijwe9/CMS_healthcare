from django.db import models
from CMS_HC_application.models import ContactDetails
from phonenumber_field.modelfields import PhoneNumberField
from CMS_billing.models import InsurancePayerDetails
from CMS_patient_sheduling.models import RoomCategory


class AddressDetails(models.Model):                
    addpatients_details_id = models. BigAutoField(primary_key=True)
    addpatients_linel = models.CharField(max_length=50)
    addpatients_line2 = models.CharField(max_length=59)
    landmark = models.CharField(max_length=50)
    area = models.CharField(max_length=30)
    town = models.CharField(max_length=38)
    city= models.CharField(max_length=30)
    state = models.CharField(max_length=20)
    pincode = models.IntegerField()



class Patient(models.Model):
    CLAIM_STATUS=[
        ('pending','pending'),
        ('success','success'),
        ('denied','denied'),
    ]
    MARITAL_STATUS =[
        ('married','married'),
        ('unmarried','unmarried'),
        ('divorced','divorced'),
        ('widow','widow')
    ]
    GENDER =[
        ('male','male'),
        ('female','female'),
        ('trans','trans')
    ]
    personal_identifier=models.BigAutoField(primary_key=True)
    patient_code = models.CharField(max_length=20, unique=True)
    claim_status = models.CharField(choices=CLAIM_STATUS,max_length=20,default='pending')
    patient_first_name = models.CharField(max_length=50)
    patient_last_name = models.CharField(max_length=50)
    patient_middle_name = models.CharField(max_length=50, blank=True, null=True)
    patient_name_prefix = models.CharField(max_length=10, blank=True, null=True)
    patient_name_suffix = models.CharField(max_length=10, blank=True, null=True)
    patient_age = models.PositiveIntegerField()
    patient_weight = models.FloatField()
    patient_height = models.PositiveIntegerField()
    patient_image = models.ImageField(upload_to='patient/', blank=True, null=True)
    patient_marital_status = models.CharField(max_length=20,choices=MARITAL_STATUS,default='unmarried')
    patient_gender = models.CharField(max_length=10, choices=GENDER)
    patient_is_handicap = models.BooleanField(default=False)
    patient_date_of_birth = models.DateField()
    patient_occupation = models.CharField(max_length=50, blank=True, null=True)
    patient_aadhar_card_number = models.CharField(max_length=16)
    patient_aadhar_card_image = models.ImageField(upload_to='patient_aadhar/', blank=True, null=True)
    created_on = models.DateTimeField(auto_now_add=True, editable=False)
    updated_on = models.DateTimeField(blank=True, null=True)
    patients_add_details = models.OneToOneField(AddressDetails, on_delete=models.CASCADE)
    contact_details = models.OneToOneField(ContactDetails, on_delete=models.CASCADE)
    
    

class BankDetails (models.Model):
    bank_details_identifier = models. BigAutoField(primary_key=True)
    pancard_number = models.CharField(max_length=10)
    account_number = models.CharField(max_length=20)
    bank_name = models.CharField(max_length=50)
    branch_name = models.CharField(max_length=30)
    ifsc_code = models.CharField(max_length=20)
    
##########################################################################

class Claim(models.Model):

    GENDER = [
	('male', 'male'),
	('female','female'),
	('others','others')
    ]

    D_STATUS =[
        ('Cured', 'Cured'), ('Improved', 'Improved'), 
        ('Unchanged', 'Unchanged'), ('Dead', 'Dead')
    ]


    C_STATUS = [
        ('Pending', 'Pending'), ('Approved', 'Approved'), 
        ('Rejected', 'Rejected')
    ]
    claim_id = models.BigAutoField(primary_key=True)
    insurance_code = models.CharField(max_length=255)
    patient_first_name = models.CharField(max_length=255)
    patient_last_name = models.CharField(max_length=255)
    patient_middle_name = models.CharField(max_length=255, blank=True)
    patient_code = models.CharField(max_length=20)
    patient_prefix = models.CharField(max_length=255, blank=True)
    patient_suffix = models.CharField(max_length=255, blank=True)
    patient_gender = models.CharField(max_length=255, choices=GENDER)
    patient_age_years = models.PositiveSmallIntegerField()
    patient_age_months = models.PositiveSmallIntegerField()
    patient_age_days = models.PositiveSmallIntegerField()
    patient_isprimary = models.BooleanField(default=False)
    patient_isrider = models.BooleanField(default=False)
    patient_occupation = models.CharField(max_length=255)
    service_provider_name = models.CharField(max_length=255)
    service_provider_code = models.CharField(max_length=255)
    admitted_reason = models.TextField(max_length=255)
    disease_start_date = models.DateField()
    admission_date = models.DateField()
    discharge_date = models.DateField()
    police_reported = models.BooleanField(default=False)
    fir_attached = models.BooleanField(default=False)
    pre_hospital_period = models.DurationField()
    post_hospital_period = models.DurationField()
    doctor_name = models.CharField(max_length=255)
    doctor_qualification = models.CharField(max_length=255)
    doctor_mobile_no = PhoneNumberField(region='IN')
    type_of_admission = models.CharField(max_length=255)
    total_claim_amount = models.FloatField()
    discharge_status = models.CharField(max_length=255, choices=D_STATUS)
    abuse_injury = models.BooleanField(default=False)
    alcohol_injury = models.BooleanField(default=False)
    abuse_report = models.FileField(upload_to='abuse_reports/', blank=True)
    alcohol_report = models.FileField(upload_to='alcohol_reports/', blank=True)
    claim_place = models.CharField(max_length=255)
    claim_date = models.DateField()
    claim_status = models.CharField(max_length=255, choices=C_STATUS)
    claim_number = models.CharField(max_length=255, unique=True)
    claim_PDF = models.FileField(upload_to='claim_pdfs/', blank=True)

    patients_add_details = models.OneToOneField(AddressDetails, on_delete=models.CASCADE,blank=True)
    room_category = models.OneToOneField(RoomCategory, on_delete=models.CASCADE, blank=True, related_name='room_category_patient')
    contact_details = models.OneToOneField(ContactDetails, on_delete=models.CASCADE, blank=True)
    insurance_payer_details = models.OneToOneField(InsurancePayerDetails, on_delete=models.CASCADE, blank=True)
    bank_details = models.OneToOneField(BankDetails, on_delete=models.CASCADE, blank=True)

class ClaimDocument(models.Model):
    claim_document_identifier = models.BigAutoField(primary_key=True)
    claim_name = models.CharField(max_length=20)
    claim_code = models.CharField(max_length=20)
    claim = models.ForeignKey(Claim, on_delete=models.CASCADE, related_name='claim_documents')
    