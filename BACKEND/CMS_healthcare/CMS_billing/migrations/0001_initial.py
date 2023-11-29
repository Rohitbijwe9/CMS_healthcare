# Generated by Django 4.2.1 on 2023-11-24 17:16

from django.db import migrations, models
import phonenumber_field.modelfields


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='HospitalExpenses',
            fields=[
                ('hospital_expenses_identifier', models.BigAutoField(primary_key=True, serialize=False)),
                ('pre_hospital_expenses', models.FloatField(default=0.0)),
                ('hospital_expenses', models.FloatField(default=0.0)),
                ('post_hospital_expenses', models.FloatField(default=0.0)),
                ('health_check_cost', models.FloatField(default=0.0)),
                ('ambulance_charges', models.FloatField(default=0.0)),
                ('other_charges', models.FloatField(default=0.0)),
                ('total_charges', models.CharField(max_length=20)),
                ('service_provider_code', models.CharField(max_length=20)),
            ],
        ),
        migrations.CreateModel(
            name='Insurance',
            fields=[
                ('insurance_identifier', models.BigAutoField(primary_key=True, serialize=False)),
                ('patient_code', models.CharField(max_length=20)),
                ('insurance_start_date', models.DateField()),
                ('insurance_end_date', models.DateField()),
                ('insurance_sum_insured', models.FloatField(default=0.0)),
                ('is_primary', models.BooleanField(default=False)),
                ('is_rider', models.BooleanField(default=False)),
                ('insurance_policy_term', models.PositiveSmallIntegerField()),
                ('insurance_premium_amount', models.FloatField(default=0.0)),
                ('insurance_policy_name', models.CharField(max_length=40)),
                ('is_cashless', models.BooleanField(default=False)),
            ],
        ),
        migrations.CreateModel(
            name='InsurancePayerDetails',
            fields=[
                ('insurance_payer_identifer', models.BigAutoField(primary_key=True, serialize=False)),
                ('insurance_payer_name', models.CharField(max_length=40)),
                ('insurance_payer_code', models.CharField(max_length=20)),
            ],
        ),
        migrations.CreateModel(
            name='Ledger',
            fields=[
                ('ledger_identifier', models.BigAutoField(primary_key=True, serialize=False)),
                ('start_date', models.DateField()),
                ('end_date', models.DateField()),
                ('sum_insured', models.FloatField(default=0.0)),
                ('balance_amount', models.FloatField(default=0.0)),
                ('payer_code', models.CharField(max_length=255)),
                ('patient_code', models.CharField(max_length=20)),
                ('is_applicable', models.BooleanField(default=True)),
            ],
        ),
        migrations.CreateModel(
            name='NomineeDetails',
            fields=[
                ('nominee_details_indentifier', models.BigAutoField(primary_key=True, serialize=False)),
                ('nominee_name', models.CharField(max_length=255)),
                ('relation_with_insurance_payer', models.CharField(max_length=255)),
                ('nominee_date_of_birth', models.DateField()),
                ('nominee_mobile_number', phonenumber_field.modelfields.PhoneNumberField(max_length=128, region='IN')),
            ],
        ),
        migrations.CreateModel(
            name='PaymentInfo',
            fields=[
                ('payment_info_identifier', models.BigAutoField(primary_key=True, serialize=False)),
                ('from_account_number', models.CharField(max_length=50)),
                ('from_branch_name', models.CharField(max_length=100)),
                ('from_ifsc_code', models.CharField(max_length=20)),
                ('from_bank_name', models.CharField(max_length=100)),
                ('patient_code', models.CharField(max_length=20)),
                ('insurance_code', models.CharField(blank=True, max_length=50, null=True)),
                ('to_account_number', models.CharField(max_length=50)),
                ('to_branch_name', models.CharField(max_length=100)),
                ('to_ifsc_code', models.CharField(max_length=20)),
                ('to_bank_name', models.CharField(max_length=100)),
                ('denied_reason', models.TextField(blank=True, null=True)),
                ('remark', models.TextField(blank=True, null=True)),
                ('total_amount', models.FloatField(default=0.0)),
                ('claim_amount', models.FloatField(default=0.0)),
                ('payment_status', models.CharField(max_length=20)),
            ],
        ),
        migrations.CreateModel(
            name='ServiceProviderBill',
            fields=[
                ('service_provider_bills_identifier', models.BigAutoField(primary_key=True, serialize=False)),
                ('service_provider_code', models.CharField(max_length=20)),
                ('bill_number', models.CharField(max_length=20)),
                ('bill_date', models.DateField()),
                ('issued_by', models.CharField(max_length=20)),
                ('title', models.CharField(max_length=20)),
                ('amount', models.FloatField(default=0.0)),
                ('bill_image', models.ImageField(upload_to='bill_images/')),
            ],
        ),
        migrations.CreateModel(
            name='TransactionDetails',
            fields=[
                ('transaction_identifier', models.BigAutoField(primary_key=True, serialize=False)),
                ('pan_card_number', models.CharField(max_length=10)),
                ('transaction_number', models.CharField(max_length=20)),
                ('account_number', models.CharField(max_length=20)),
                ('bank_name', models.CharField(max_length=40)),
                ('branch_name', models.CharField(max_length=30)),
                ('bank_ifsc_code', models.CharField(max_length=20)),
            ],
        ),
    ]
