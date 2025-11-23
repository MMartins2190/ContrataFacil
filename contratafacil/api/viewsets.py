from rest_framework import viewsets, status
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.response import Response
from rest_framework.permissions import AllowAny, IsAuthenticated
from contratafacil import models
from contratafacil.api import serializers
from drf_yasg.utils import swagger_auto_schema
from rest_framework.decorators import action
from django.utils.decorators import method_decorator
from django.views.decorators.clickjacking import xframe_options_exempt
from rest_framework.response import Response
from django.contrib.auth import authenticate 
from rest_framework.authtoken.models import Token

# Experimetal view to test viewing dpfs through iframes
@method_decorator(xframe_options_exempt, name="dispatch")
class PdfViewSet(viewsets.ViewSet):
    def list(self, request):
        return Response("http://127.0.0.1:8000/media/pdf/file.pdf", status.HTTP_200_OK)

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

class CandidatoViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.CandidatoSerializer
    queryset = models.Candidato.objects.all()
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
    def create(self, request):
        serializador = serializers.LoginSerializer(data=request.data)
        if serializador.is_valid():
            username = serializador.validated_data["username"]
            password = serializador.validated_data["password"]
            user = authenticate(request, username=username, password=password)
            if not user:
                return Response({"detail": "Invalid credentials"}, status.HTTP_400_BAD_REQUEST)

            return Response({"detail": "ok", "user": user.id})
        return Response("Dados inválidos", status.HTTP_400_BAD_REQUEST)