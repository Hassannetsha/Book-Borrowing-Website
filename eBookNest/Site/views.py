from django.shortcuts import render
from django.http import HttpResponse
from .models import Book
def index(request):
    return render(request,'main-sign-page.html')

def signinAdmin(request):
    return render(request,'signinadmin.html')
def home(request):
    books = Book.objects.all() 
    return render(request,'home.html', {'Book': books})
def signUpAdmin(request):
    return render(request,'signup-admin.html')
def signinUser(request):
    return render(request,'signin-user.html')
def signUpUser(request):
    return render(request,'signup-user.html')
def available_books_view(request):
    books = Book.objects.all()  # or any other queryset
    return render(request, 'your_template.html', {'Book': books})
