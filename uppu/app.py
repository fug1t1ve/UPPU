from django.shortcuts import render

def index(request):
    return render(request,r'homepage/index.html')

def login(request):
    return render(request,r'login/login.html')

def registration(request):
    return render(request,r'Registration/reg.html')