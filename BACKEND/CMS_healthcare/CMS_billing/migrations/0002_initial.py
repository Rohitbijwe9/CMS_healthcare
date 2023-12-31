# Generated by Django 4.2.6 on 2023-10-31 05:47

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('CMS_patient_sheduling', '0001_initial'),
        ('CMS_patient_registration', '0001_initial'),
        ('CMS_billing', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='serviceproviderbill',
            name='claim',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='claim_bills', to='CMS_patient_registration.claim'),
        ),
        migrations.AddField(
            model_name='serviceproviderbill',
            name='service_provider',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='service_provider_bills', to='CMS_patient_sheduling.serviceprovider'),
        ),
        migrations.AddField(
            model_name='insurancepayerdetails',
            name='address_details',
            field=models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='insurance_payer_name', to='CMS_patient_registration.addressdetails'),
        ),
        migrations.AddField(
            model_name='insurance',
            name='insurance_payer_details',
            field=models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='insurance_payer_details', to='CMS_billing.insurancepayerdetails'),
        ),
        migrations.AddField(
            model_name='insurance',
            name='nominee_details',
            field=models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='insurance_identifier', to='CMS_billing.nomineedetails'),
        ),
        migrations.AddField(
            model_name='hospitalexpenses',
            name='claim',
            field=models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='claim_hospital', to='CMS_patient_registration.claim'),
        ),
    ]
