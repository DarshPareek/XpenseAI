from decimal import Decimal
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from .models import Product
from .serializer import ProductSerializer

@api_view(['GET', 'POST'])
def product_list(request):
    if request.method == 'GET':
        products = Product.objects.all().order_by('-date')

        date_filter = request.GET.get('date')  
        month_filter = request.GET.get('month')  
        year_filter = request.GET.get('year')  

        if date_filter:
            products = products.filter(date=date_filter)
        if month_filter:
            products = products.filter(date__month=month_filter)
        if year_filter:
            products = products.filter(date__year=year_filter)

        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data)

    if request.method == 'POST':
        product_name = request.data.get('name')
        product_price = request.data.get('price')
        product_category = request.data.get('')
        

        if not product_name or not product_price:
            return Response({"error": "Product name and price are required"}, status=status.HTTP_400_BAD_REQUEST)

        try:
            product = Product.objects.get(name=product_name)
            product.price += Decimal(str(product_price))
            product.save()
            serializer = ProductSerializer(product)
            return Response(serializer.data, status=status.HTTP_200_OK)
        except Product.DoesNotExist:
            serializer = ProductSerializer(data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_201_CREATED)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
