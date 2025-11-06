from django.contrib.auth.backends import BaseBackend
from django.db.models import Q
from contratafacil.models import Usuario
from django.contrib.auth.hashers import check_password
from django.core.exceptions import MultipleObjectsReturned

class CustomBackend(BaseBackend):
    # TODO: Implementar rate limiting e quaisquer outras medidas de segurança
    def authenticate(self, request, username=None, email=None, password=None):
        try:
            # Ambas condições tem de se referir a um mesmo usuário
            user = Usuario._default_manager.get(Q(username=username) | Q(email=email))
        except MultipleObjectsReturned:
            Usuario().set_password(password)
        except Usuario.DoesNotExist:
            Usuario().set_password(password)
        else:
            if user.check_password(password):
                return user
