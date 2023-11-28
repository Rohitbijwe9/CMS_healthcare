# Generated by Django 4.2.4 on 2023-11-05 09:24

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('CMS_patient_registration', '0001_initial'),
        ('CMS_HC_application', '0002_initial'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='ServiceProvider',
            fields=[
                ('service_provider_identifier', models.BigAutoField(primary_key=True, serialize=False)),
                ('service_provider_name', models.CharField(max_length=50)),
                ('service_provider_code', models.CharField(max_length=20)),
                ('hospital_identifier', models.CharField(max_length=20)),
                ('hospital_type', models.CharField(max_length=20)),
                ('hospital_registration_number', models.CharField(max_length=20, unique=True)),
                ('address_details', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='address_details', to='CMS_patient_registration.addressdetails')),
                ('contact_details', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='service_provider_contact_details', to='CMS_HC_application.contactdetails')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='RoomCategory',
            fields=[
                ('room_category_identifier', models.BigAutoField(primary_key=True, serialize=False)),
                ('room_category_name', models.CharField(choices=[('icu', 'icu'), ('general_ward', 'general_ward'), ('special_ward', 'special_ward')], default='general_ward', max_length=20)),
                ('claim', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='room_claim', to='CMS_patient_registration.claim')),
                ('service_provider', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='serviceprovider', to='CMS_patient_sheduling.serviceprovider')),
            ],
        ),
    ]
