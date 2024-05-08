from django.urls import path
from . import views

urlpatterns = [
    path('', views.main, name='index'),
    path('SignPages/html/signin-user.html', views.signinUser, name='add'),
    path('signup-user.html', views.signupUser, name='delete'),
    path('signinadmin.html', views.signupAdmin, name='edit'),
    path('signup-admin.html', views.signinAdmin, name='select'),
    path('home/', views.home, name='select'),
]