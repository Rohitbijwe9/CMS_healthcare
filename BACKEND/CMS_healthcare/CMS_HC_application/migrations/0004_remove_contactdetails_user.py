# Generated by Django 4.2.1 on 2023-11-04 18:57

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('CMS_HC_application', '0003_appointment_a_status'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='contactdetails',
            name='user',
        ),
    ]