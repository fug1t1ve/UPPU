from django.http import HttpResponseRedirect,HttpResponse
from django.shortcuts import render
from secrets import token_urlsafe

from .forms import NameForm,Items

# Create your views here.

def inventory(request):
    return HttpResponse('Hello this is inventory')



def get_name(request):
    # if this is a POST request we need to process the form data
    if request.method == 'POST':
        # create a form instance and populate it with data from the request:
        form = NameForm(request.POST)
        # check whether it's valid:
        if form.is_valid():
            # process the data in form.cleaned_data as required
            # ...
            # redirect to a new URL:'
            return HttpResponse('Thank you')

    # if a GET (or any other method) we'll create a blank form
    else:
        form = NameForm()

    return render(request, 'inventory/login.html', {'form': form})

def addProduct(request):
    # if this is a POST request we need to process the form data
    UID = token_urlsafe(16)
    if request.method == 'POST':
        # create a form instance and populate it with data from the request:
        form = Items(request.POST)
        # check whether it's valid:
        if form.is_valid():
            # process the data in form.cleaned_data as required
            # ...
            # redirect to a new URL:'
            data = form.cleaned_data
            return HttpResponse('Thank you')
    else:
        form = Items()

    return render(request, 'inventory/addItems.html', {'form': form,'UID' : UID})