from django.urls import path

from . import views

urlpatterns = [
    path('', views.inventory, name='inventory'),
    path('login/',views.get_name,name="additem"),
    path('addItems/',views.addProduct,name="addPDT"),
]