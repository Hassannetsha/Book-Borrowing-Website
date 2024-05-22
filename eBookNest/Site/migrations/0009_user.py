# Generated by Django 5.0.6 on 2024-05-22 19:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Site', '0008_delete_usertype'),
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('first_name', models.CharField(max_length=100)),
                ('last_name', models.CharField(max_length=100)),
                ('email', models.EmailField(max_length=254, unique=True)),
                ('password', models.CharField(max_length=100)),
                ('address', models.CharField(max_length=255)),
                ('phone_number', models.CharField(max_length=15)),
                ('isUser', models.BooleanField(default=True)),
            ],
        ),
    ]
