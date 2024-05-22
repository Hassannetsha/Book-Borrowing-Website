from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('signinAdmin/', views.signinAdmin, name='SigninAdmin'),
    # path('test/', views.test, name='home'),
    path('SigninUser/', views.signinUser, name='SigninUser'),
    path('SignUpAdmin/', views.signUpAdmin, name='SignUpAdmin'),
    path('SignUpUser/', views.signUpUser, name='SignUpUser'),
    # path('test/', views.test, name='test'),
    path('home/', views.home, name='home'),
    path('api/categories/', views.category_data, name='category_data'),
    path('api/books/', views.book_data, name='book_data'),
    path('Convert/<int:Id>', views.Convert, name='Convert'),
    path('delete-book/<int:book_id>/', views.delete_book, name='delete_book'),
    path('getbooks/', views.getbooks, name='getbooks'),
]
