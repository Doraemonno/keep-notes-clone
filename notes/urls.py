from django.urls import path
from . import views
urlpatterns = [
    path('main/',views.main,name="main"),
    path('getData/',views.getData,name="getData"),
    path('delete/<int:id>',views.delete,name="delete"),
    path('edit/<int:id>',views.edit,name="edit"),
]
