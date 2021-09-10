from django.contrib import admin
from django.urls import path
from django.urls.conf import include
from .views import inventory,addProduct

urlpatterns = [
    path('',inventory ),
    path('addProduct/',addProduct),
]
