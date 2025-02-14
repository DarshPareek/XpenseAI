from django.urls import path
#from . import views
#from .views import add_data_api
#from .views import simple_get_endpoint
from .views import product_list

urlpatterns = [
         #path('getAmount/', simple_get_endpoint),
        # path('api/add/', add_data_api, name='add_data_api'),
         path('api/products/', product_list, name='product_list'),
]