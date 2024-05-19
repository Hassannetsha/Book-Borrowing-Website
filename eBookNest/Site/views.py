from django.shortcuts import render
from django.http import HttpResponse
from .models import Book
def index(request):
    return render(request,'main-sign-page.html')

def signinAdmin(request):
    return render(request,'signinadmin.html')
def test(request):
    books = Book.objects.all().values()
    return render(request, 'test.html', {'books': books})
def signUpAdmin(request):
    return render(request,'signup-admin.html')
def signinUser(request):
    return render(request,'signin-user.html')
def signUpUser(request):
    return render(request,'signup-user.html')
def test(request):
    books = Book.objects.all()  # or any other queryset
    return render(request, 'test.html', {'books': books})

