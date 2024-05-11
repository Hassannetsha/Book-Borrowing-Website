from django.urls import path
from . import views

urlpatterns = [
    path('', views.main, name='index'),
    path('SignPages/html/signin-user.html', views.signinUser, name='add'),
    path('signup-user.html', views.signupUser, name='delete'),
    path('signin-user.html', views.signinUser, name='edit'),
    path('signinadmin.html', views.signinAdmin, name='select1'),
    path('signup-admin.html', views.signupAdmin, name='select2'),
    path('home_page/home.html', views.home, name='select3'),
]

