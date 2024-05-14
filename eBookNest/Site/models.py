from django.db import models

# Create your models here.
class Categorys(models.Model):
    Category_name = models.CharField(max_length=200, primary_key=True)
class Book(models.Model):
    Category = models.ForeignKey(Categorys, on_delete=models.CASCADE, related_name="Books")