from django.conf.urls import url
from django.contrib import admin

urlpatterns = [
    url(r'^$','gestion.views.listar'),
    url(r'^crearAlum/$','gestion.views.crearAlum'),
    url(r'^crearMate/$','gestion.views.crearMate'),
    ]

    