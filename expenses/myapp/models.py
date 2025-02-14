from django.db import models

class Product(models.Model):
    name = models.CharField(max_length=255)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    category = models.CharField(max_length=255, blank=True, null=True)
    date = models.DateField(auto_now_add=True)  # Change this from timestamp



