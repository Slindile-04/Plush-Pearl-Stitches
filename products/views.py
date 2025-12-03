from django.shortcuts import render
from .models import Product, Promotion

def index(request):
    products = Product.objects.all()
    promotions = Promotion.objects.filter(is_active=True)
    return render(request, 'products/index.html', {
        'products': products,
        'promotions': promotions
    })