
from django.urls import path

from app1 import views

urlpatterns = [
    path('', views.app1_list),
    path('<int:details>', views.app1_detail),
]