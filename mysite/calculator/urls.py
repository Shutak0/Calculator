from django.urls import include, re_path
from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('comparison', views.comparison, name='comparison'),
    path('converter', views.converter, name='converter'),
]
