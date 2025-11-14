from datetime import timedelta
from rest_framework import viewsets, status
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.response import Response
from rest_framework.permissions import AllowAny, IsAuthenticated
from contratafacil import models
from contratafacil.api import serializers
from drf_yasg.utils import swagger_auto_schema
from rest_framework.decorators import action
from rest_framework.response import Response
from django.contrib.auth import authenticate 
from rest_framework.authtoken.models import Token

class UsuarioViewSet(viewsets.ModelViewSet):
    queryset = models.Usuario.objects.all()
    serializer_class = serializers.UsuarioSerializer
    permission_classes = [AllowAny]

    @swagger_auto_schema(
        operation_description="Lista os currículos de um usuário",
        responses={200: serializers.CurriculoSerializer(many=True)}
    )
    @action(detail=True, methods=['get'])
    def curriculos(self, request, pk=None):
        usuario = self.get_object()
        curriculos = usuario.curriculos.all()
        serializer = serializers.CurriculoSerializer(curriculos, many=True)
        return Response(serializer.data)

# 🔄 Agora aceita upload de imagem
class CurriculoViewSet(viewsets.ModelViewSet):
    queryset = models.Curriculo.objects.all()
    serializer_class = serializers.CurriculoSerializer
    parser_classes = [MultiPartParser, FormParser]  # permite upload de imagem
    permission_classes = [AllowAny]


class VagaViewSet(viewsets.ModelViewSet):
    queryset = models.Vaga.objects.all()
    serializer_class = serializers.VagaSerializer
    permission_classes = [AllowAny]


class CandidaturaViewSet(viewsets.ModelViewSet):
    queryset = models.Candidatura.objects.all()
    serializer_class = serializers.CandidaturaSerializer
    permission_classes = [AllowAny]


class EmpresaViewSet(viewsets.ModelViewSet):
    queryset = models.Empresa.objects.all()
    serializer_class = serializers.EmpresaSerializer
    permission_classes = [AllowAny]

class LoginViewSet(viewsets.ViewSet):
    permission_classes = [AllowAny]
    def create(self, request):
        serializador = serializers.LoginSerializer(data=request.data)
        if serializador.is_valid():
            username = serializador.validated_data["username"]
            password = serializador.validated_data["password"]
            email = serializador.validated_data["email"]
           
            usuario = authenticate(username=username, password=password, email=email)
            if usuario is not None:
                token, _ = Token.objects.get_or_create(user=usuario)
                response = Response("Autenticado", status.HTTP_200_OK)
                response.set_cookie("Token",
                                    token.key,
                                    path="/",
                                    samesite="Lax",
                                    httponly=True,
                                    secure=False, # Mudar em deployment
                                    max_age= timedelta(days=2),
                                    )
                return response;
            return Response(f"Falha na autenticação, verifique suas credenciais", status=status.HTTP_400_BAD_REQUEST) 
        return Response(serializador.errors, status=status.HTTP_400_BAD_REQUEST)