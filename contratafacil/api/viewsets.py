from rest_framework import viewsets, status
from rest_framework.views import APIView
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.response import Response
from rest_framework.permissions import AllowAny, IsAuthenticated
from django.middleware.csrf import get_token
from contratafacil import models
from contratafacil.api import serializers
from drf_yasg.utils import swagger_auto_schema
from rest_framework.decorators import action
from rest_framework.response import Response
from django.contrib.auth.hashers import make_password
from django.contrib.auth import authenticate, login, logout 


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
    permission_classes = [IsAuthenticated]


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
            senha = serializador.validated_data["senha"]
            email = serializador.validated_data["email"]
           
            usuario = authenticate(username=username, senha=senha, email=email)
            if usuario is not None:
                # backend = CustomBackend
                print(login(request, usuario))
                response = Response("Autenticado.", status.HTTP_200_OK)
                return response
            return Response(f"Falha na autenticação, verifique suas credenciais", status=status.HTTP_400_BAD_REQUEST) 
        return Response(serializador.errors, status=status.HTTP_400_BAD_REQUEST)
    
class LogoutViewSet(viewsets.ViewSet):
    permission_classes = [AllowAny]
    def create(self, request):
        logout(request)
        return Response("Saiu", status.HTTP_200_OK)

# Pegar um token contra Cross-Site Request Forgery 🤗
class CSRFView(APIView):
    permission_classes = [AllowAny]
    def get(self, request):
        token = get_token(request)
        return Response(token, status.HTTP_200_OK)