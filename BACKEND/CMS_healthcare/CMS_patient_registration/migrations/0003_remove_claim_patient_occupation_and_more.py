# Generated by Django 4.2.1 on 2023-11-03 18:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('CMS_patient_registration', '0002_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='claim',
            name='patient_occupation',
        ),
        migrations.AlterField(
            model_name='addressdetails',
            name='town',
            field=models.CharField(max_length=40),
        ),
    ]