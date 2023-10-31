# Generated by Django 4.2.6 on 2023-10-31 20:36

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('CMS_patient_registration', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Disease',
            fields=[
                ('disease_identifier', models.BigAutoField(primary_key=True, serialize=False)),
                ('patient_code', models.CharField(max_length=20)),
                ('disease_name', models.CharField(max_length=50)),
                ('disease_category', models.CharField(max_length=50)),
                ('denied_reason', models.CharField(max_length=50)),
                ('is_disease_covered', models.BooleanField(default=False)),
                ('claim', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='claim_disease', to='CMS_patient_registration.claim')),
                ('patient', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='patient_diseases', to='CMS_patient_registration.patient')),
            ],
        ),
        migrations.CreateModel(
            name='DiseaseDocument',
            fields=[
                ('disease_document_identifier', models.BigAutoField(primary_key=True, serialize=False)),
                ('disease_document_name', models.CharField(max_length=50)),
                ('disease_document_file', models.FileField(upload_to='disease_document/')),
                ('disease', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='disease_document', to='CMS_tratment.disease')),
            ],
        ),
    ]
