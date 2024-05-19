from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('signinAdmin/', views.signinAdmin, name='SigninAdmin'),
    # path('test/', views.test, name='home'),
    path('SigninUser/', views.signinUser, name='SigninUser'),
    path('SignUpAdmin/', views.signUpAdmin, name='SignUpAdmin'),
    path('SignUpUser/', views.signUpUser, name='SignUpUser'),
    path('test/', views.test, name='home'),
]
