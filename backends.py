from django.contrib.auth.backends import BaseBackend
from django.db.models import Q
from contratafacil.models import Usuario
from django.contrib.auth.hashers import check_password

class CustomBackend(BaseBackend):
    def authenticate(self, request, username=None, email=None, senha=None):
        try:
            user = Usuario._default_manager.get(Q(username=username) | Q(email=email))
        except Usuario.DoesNotExist:
            Usuario().set_password(senha)
        else:
            if user.check_password(senha):
                return user
