# Generated by Django 4.2.7 on 2023-11-06 19:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('CMS_auth', '0002_alter_user_email'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='email',
            field=models.EmailField(max_length=20),
        ),
    ]
