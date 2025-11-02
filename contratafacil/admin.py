from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import Usuario

# Transforma em comentário em erro de resolução.
admin.site.register(Usuario, UserAdmin)