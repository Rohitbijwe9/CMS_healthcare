from django.contrib import admin
from .models import InsurancePayerDetails ,ServiceProviderBill,HospitalExpenses,NomineeDetails,Insurance,TransactionDetails,PaymentInfo ,Ledger



@admin.register(InsurancePayerDetails)
class InsurencePayerDetAdmin(admin.ModelAdmin):
    list_display=['insurance_payer_name','insurance_payer_code','address_details']


@admin.register(ServiceProviderBill)
class ServiceProviderBillAdmin(admin.ModelAdmin):
    list_display = [
        'service_provider_bills_identifier',
         'service_provider_code',
         'bill_number',
         'bill_date',
         'issued_by',
         'title',
         'amount',
         'bill_image',
    ]




@admin.register(HospitalExpenses)
class HospitalExpensesAdmin(admin.ModelAdmin):
    list_display = ['hospital_expenses_identifier','pre_hospital_expenses','hospital_expenses','post_hospital_expenses','health_check_cost','ambulance_charges','other_charges','total_charges','service_provider_code','claim']



@admin.register(NomineeDetails)
class NomineeDetailsAdmin(admin.ModelAdmin):
    list_display = [
        'nominee_details_indentifier',
        'nominee_name',
        'relation_with_insurance_payer',
        'nominee_date_of_birth',
        'nominee_mobile_number'
    ]





@admin.register(Insurance)
class InsuranceAdmin(admin.ModelAdmin):
    list_display = [
        'insurance_identifier',
        'patient_code',
        'insurance_start_date',
        'insurance_end_date',
        'insurance_sum_insured',
        'is_primary',
        'is_rider',
        'insurance_policy_term',
        'insurance_premium_amount',
        'insurance_policy_name',
        'is_cashless',
        'nominee_details',
        'insurance_payer_details',
    ]


@admin.register(TransactionDetails)
class TransactionAdmin(admin.ModelAdmin):
    list_display=['transaction_identifier','pan_card_number','transaction_number','account_number','bank_name','branch_name','bank_ifsc_code']

  



@admin.register(Ledger)
class LedgerAdmin(admin.ModelAdmin):
    list_display = [
                        'start_date',
                        'end_date',
                        'sum_insured',
                        'balance_amount',
                        'payer_code',
                        'patient_code',
                        'is_applicable',
    ]

@admin.register(PaymentInfo)
class PaymentInfoAdmin(admin.ModelAdmin):
    list_display = [
        'from_account_number',
        'from_branch_name',
        'from_ifsc_code',
        'from_bank_name',
        'patient_code',
        'insurance_code',
        'to_account_number',
        'to_branch_name',
        'to_ifsc_code',
        'to_bank_name',
        'denied_reason',
        'remark',
        'total_amount',
        'claim_amount',
        'payment_status',
    ]










