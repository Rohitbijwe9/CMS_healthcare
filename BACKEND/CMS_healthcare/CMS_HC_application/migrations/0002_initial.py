# Generated by Django 4.2.7 on 2023-11-06 18:19

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('CMS_HC_application', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='contactdetails',
            name='user',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
        migrations.AddField(
            model_name='appointment',
            name='contact_details',
            field=models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='appointment_contact_details', to='CMS_HC_application.contactdetails'),
        ),
    ]
