from django.shortcuts import render
from django.http import HttpResponse,HttpResponseRedirect
from django.template import loader
from django.urls import reverse

# Create your views here.
def index(request):
    return render(request,'index.html')