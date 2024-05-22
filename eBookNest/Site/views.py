from django.shortcuts import get_object_or_404, redirect, render
from django.http import JsonResponse
from django.urls import reverse
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
    return render(request, 'Home.html', {'books': books,'categories': categories})
def category_data(request):
    categories = list(Categorys.objects.values())
    return JsonResponse(categories, safe=False)
def book_data(request):
    books = list(Book.objects.values())
    return JsonResponse(books, safe=False)
def Convert(request, Id):
    if request.method == "PATCH":
        book = get_object_or_404(Book, pk=Id)
        book.Available = not book.Available
        book.save()
        return JsonResponse({'status': 'Book updated'}, status=200, content_type='application/json') 
    return JsonResponse({'status': 'Invalid request'}, status=400)
def delete_book(request, book_id):
    if request.method == "DELETE":
        book = get_object_or_404(Book, id=book_id)
        book.delete()
        return JsonResponse({'status': 'Book deleted'})
    return JsonResponse({'status': 'Invalid request'}, status=400)
def getbooks(request):
    books = Book.objects.all()
    Categoryies = Categorys.objects.all()
    return JsonResponse({"books":list(books.values()),
        "categories":list(Categoryies.values())}, status=200)
def Availableallbooks(request):
    books = Book.objects.all()
    return render(request, 'availavbleBooks.html', {'books': books})
def selectBook(request):
    books = Book.objects.all()
    categories = Categorys.objects.all()
    return render(request, 'Home.html', {'books': books,'categories': categories})
def details(request,Id):
    book = get_object_or_404(Book, pk=Id)
    category = book.Category
    return render(request, 'bookdetails.html', {"book": book, "category": category})
def toggleusertype(request,ID):
    if request.method == "PATCH":
        return JsonResponse({'status': 'user updated'}, status=200, content_type='application/json') 
    return JsonResponse({'status': 'Invalid request'}, status=400)
def EditBook(request,Id):
    book = get_object_or_404(Book,pk=Id)
    return render(request,'Edit.html',{'book':book})
    # return render(request,'Edit.html',{'book':book,"user":user})