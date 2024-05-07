from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('add/', views.add, name='add'),
    path('delete/', views.delete, name='delete'),
    path('edit/', views.edit, name='edit'),
    path('select/', views.select, name='select'),
    path('home/', views.home, name='select'),
]