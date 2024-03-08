from django.urls import path

from . import views
app_name = 'recruit'
urlpatterns = [
    path('', views.index, name='index'),
]