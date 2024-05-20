from django.shortcuts import render
from django.http import JsonResponse
from .models import Book,Categorys
def index(request):
    return render(request,'main-sign-page.html')

def signinAdmin(request):
    return render(request,'signinadmin.html')
def signUpAdmin(request):
    return render(request,'signup-admin.html')
def signinUser(request):
    return render(request,'signin-user.html')
def signUpUser(request):
    return render(request,'signup-user.html')
# def test(request):
#     books = Book.objects.all()  # or any other queryset
#     return render(request, 'test.html', {'books': books})
def home(request):
    books = Book.objects.all()  # or any other queryset
    categories = Categorys.objects.all()
    categories_length = len(categories)
    return render(request, 'home.html', {'books': books,'categories': categories,'categories_length':categories_length})
def category_data(request):
    categories = list(Categorys.objects.values())  # Converts queryset to list of dictionaries
    return JsonResponse(categories, safe=False)
def book_data(request):
    books = list(Book.objects.values())
    return JsonResponse(books, safe=False)

