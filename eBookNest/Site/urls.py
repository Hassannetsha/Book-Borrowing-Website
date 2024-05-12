from django.urls import path
from . import views

urlpatterns = [
    path('', views.main, name='index'),
    # path('SignPages/html/signin-user.html', views.signinUser, name='add'),
    # path('signup-user.html', views.signupUser, name='delete'),
    # path('signin-user.html', views.signinUser, name='edit'),
    path('signinadmin.html', views.signinAdmin, name='select1'),
    path('signup-admin.html', views.signupAdmin, name='select2'),
    path('home_page', views.home, name='home'),
    # path('User_Home_page/availavbleBooks.html', views.available, name='select3'),
    # path('User_Home_page/borrowedBooks.html', views.borrowed, name='select3'),
    path('', views.signout, name='select3'),
]

