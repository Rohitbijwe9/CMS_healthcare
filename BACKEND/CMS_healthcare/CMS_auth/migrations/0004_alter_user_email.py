# Generated by Django 4.2.7 on 2023-11-07 04:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('CMS_auth', '0003_alter_user_email'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='email',
            field=models.EmailField(max_length=50),
        ),
    ]