from django.db import models

class Book(models.Model):
    Bookname = models.CharField(max_length=255)
    Id = models.CharField(max_length=20, unique=True)
    author = models.CharField(max_length=100)
    categoreys = models.CharField(max_length=100)
    description1 = models.TextField()
    description2 = models.TextField()
    rating = models.DecimalField(max_digits=3, decimal_places=2)
    no_pages = models.PositiveIntegerField()
    BookCover = models.ImageField(upload_to='book_covers/')
    def __str__(self): # make object str
        return self.Bookname