from django.db import models

# Create your models here.
class Categorys(models.Model):
    Category_name = models.CharField(max_length=200)
    Category_Id = models.AutoField(primary_key=True)
    def __str__(self):
        return self.Category_name

class Book(models.Model):
    Book_name = models.CharField(max_length=200)
    Book_author = models.CharField(max_length=200)
    no_page = models.IntegerField()
    BookCover = models.ImageField(upload_to='book_covers/' ,null=True , blank =True )
    Category = models.ForeignKey(Categorys, on_delete=models.CASCADE, related_name="Books")
    Book_Id = models.IntegerField(primary_key=True)
    description = models.TextField()
    Available = models.BooleanField(default=True)
    def __str__(self):
        return self.Book_name