# Generated by Django 5.0.6 on 2024-05-22 12:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Site', '0003_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='usertype',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('type', models.CharField(max_length=100)),
            ],
        ),
    ]
