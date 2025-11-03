from rest_framework import viewsets, status
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.response import Response
from rest_framework.permissions import AllowAny, IsAuthenticated
from contratafacil import models
from rest_framework_simplejwt.tokens import RefreshToken
from contratafacil.api import serializers
from drf_yasg.utils import swagger_auto_schema
from rest_framework.decorators import action
from rest_framework.response import Response
from django.contrib.auth.hashers import make_password
from django.contrib.auth import authenticate


class UsuarioViewSet(viewsets.ModelViewSet):
    queryset = models.Usuario.objects.all()
    serializer_class = serializers.UsuarioSerializer
    permission_classes = [AllowAny]

    def create(self, request):
        serializador = serializers.UsuarioSerializer(data=request.data)
        if serializador.is_valid():
            senha_hash = make_password(serializador.validated_data["password"])
            serializador.validated_data["password"] = senha_hash
            models.Usuario.objects.create(**serializador.validated_data)
            return Response(serializador.validated_data, status.HTTP_201_CREATED)
        return Response(serializador.errors, status.HTTP_400_BAD_REQUEST)
    
    def update(self, request, pk=None):
        serializador = serializers.UsuarioSerializer(data=request.data)
        if serializador.is_valid():
            senha_hash = make_password(serializador.validated_data["password"])
            serializador.validated_data["password"] = senha_hash
            serializador.save()
            return Response(serializador.data, status.HTTP_200_OK)
        return Response(serializador.errors, status.HTTP_400_BAD_REQUEST)


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

class LoginViewset(viewsets.ViewSet):
    permission_classes = [AllowAny]
    def create(self, request):
        serializador = serializers.LoginSerializer(data=request.data)
        if serializador.is_valid():
            username = serializador.validated_data["username"]
            senha = serializador.validated_data["senha"]
            email = serializador.validated_data["email"]
           
            user = authenticate(username=username, senha=senha, email=email)
            if user is not None:
                refresh_token = RefreshToken.for_user(user)
                access_token = refresh_token.access_token
                body = {
                    'access': str(access_token),
                    'refresh': str(refresh_token),
                    'user': {
                        'userId': user.id,
                        'username': user.username,
                        'email': user.email,
                    }
                }
                # Criando o obj Response e guardando tokens em cookies
                response = Response(body, status.HTTP_200_OK)
                response.set_cookie("access_token", access_token)
                response.set_cookie("refresh_token", refresh_token)
                return response
            return Response(f"Falha na autenticação, verifique suas credenciais", status=status.HTTP_401_UNAUTHORIZED) 
        return Response(serializador.errors, status=status.HTTP_400_BAD_REQUEST)