from django.shortcuts import render
from django.http import HttpResponse

def index(request):
    return render(request,'main-sign-page.html')

def signinAdmin(request):
    return render(request,'signinadmin.html')
def home(request):
    return render(request,'home.html')
def signUpAdmin(request):
    return render(request,'signup-admin.html')
def signinUser(request):
    return render(request,'signin-user.html')
def signUpUser(request):
    return render(request,'signup-user.html')
