from django.contrib import admin
from .models import Product, Promotion

@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ('name', 'price', 'created_at')
    search_fields = ('name', 'description')
    list_filter = ('created_at',)

@admin.register(Promotion)
class PromotionAdmin(admin.ModelAdmin):
    list_display = ('title', 'discount_percentage', 'is_active', 'start_date', 'end_date')
    search_fields = ('title', 'description')
    list_filter = ('is_active', 'start_date')
