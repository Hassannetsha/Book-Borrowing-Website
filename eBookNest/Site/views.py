from django.shortcuts import render
from django.http import HttpResponse,HttpResponseRedirect
from django.template import loader
from django.urls import reverse

# Create your views here.
def index(request):
    return render(request,'pages/index.html')
def add(request):
    return render(request,'Admin_Home_page/add.html')
def delete(request):
    return render(request,'Admin_Home_page/delete.html')
def edit(request):
    return render(request,'Admin_Home_page/Edit.html')
def select(request):
    return render(request,'Admin_Home_page/Select.html')
def home(request):
    return render(request,'home_page/home.html')