# Generated by Django 5.0.6 on 2024-05-20 16:27

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('Site', '0005_categorys_category_id'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='categorys',
            name='Category_id',
        ),
    ]
