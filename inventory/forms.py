from django import forms

class NameForm(forms.Form):
    email = forms.EmailField(label='email', max_length=100)
    password = forms.CharField(widget=forms.PasswordInput(attrs={
    'class': 'input-text with-border', 'placeholder': 'Password'}))

class Items(forms.Form):
    prod_id = forms.CharField(label="name",max_length=256,required=True)
    prod_name = forms.CharField(label="name",max_length=256,required=True)
    prod_price = forms.IntegerField(label="price",min_value=0,required=True)
    prod_quantity = forms.IntegerField(label="quantity",min_value=0,required=True)
    prod_add_time = forms.CharField(label="time")
    prod_img = forms.CharField(label='image' ,required=True)