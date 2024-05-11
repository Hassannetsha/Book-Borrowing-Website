from django.shortcuts import render
from django.http import HttpResponse,HttpResponseRedirect
from django.template import loader
from django.urls import reverse

# Create your views here.
def main(request):
    return render(request,'SignPages/html/main-sign-page.html')
def signinUser(request):
    return render(request,'SignPages/html/signin-user.html')
def signupUser(request):
    return render(request,'SignPages/html/signup-user.html')
def signinAdmin(request):
    return render(request,'SignPages/html/signinadmin.html')
def signupAdmin(request):
    return render(request,'SignPages/html/signup-admin.html')
def home(request):
    return render(request,'home_page/home.html')