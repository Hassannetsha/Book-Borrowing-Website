# Generated by Django 5.0.6 on 2024-05-20 17:08

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Categorys',
            fields=[
                ('Category_name', models.CharField(max_length=200)),
                ('Category_Id', models.AutoField(primary_key=True, serialize=False)),
            ],
        ),
        migrations.CreateModel(
            name='Book',
            fields=[
                ('Book_name', models.CharField(max_length=200)),
                ('Book_author', models.CharField(max_length=200)),
                ('no_page', models.IntegerField()),
                ('BookCover', models.ImageField(blank=True, null=True, upload_to='book_covers/')),
                ('Book_Id', models.IntegerField(primary_key=True, serialize=False)),
                ('description', models.TextField()),
                ('Available', models.BooleanField(default=True)),
                ('Category', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='Books', to='Site.categorys')),
            ],
        ),
    ]
