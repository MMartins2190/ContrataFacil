from rest_framework import viewsets
from rest_framework.parsers import MultiPartParser, FormParser
from contratafacil import models
from contratafacil.api import serializers
from drf_yasg.utils import swagger_auto_schema
from rest_framework.decorators import action
from rest_framework.response import Response


class UsuarioViewSet(viewsets.ModelViewSet):
    queryset = models.Usuario.objects.all()
    serializer_class = serializers.UsuarioSerializer

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


class CompetenciaViewSet(viewsets.ModelViewSet):
    queryset = models.Competencia.objects.all()
    serializer_class = serializers.CompetenciaSerializer


class CandidatoViewSet(viewsets.ModelViewSet):
    queryset = models.Candidato.objects.all()
    serializer_class = serializers.CandidatoSerializer

    @swagger_auto_schema(
        operation_description="Lista candidaturas de um candidato",
        responses={200: serializers.CandidaturaSerializer(many=True)}
    )
    @action(detail=True, methods=['get'])
    def candidaturas(self, request, pk=None):
        candidato = self.get_object()
        candidaturas = candidato.candidaturas.all()
        serializer = serializers.CandidaturaSerializer(candidaturas, many=True)
        return Response(serializer.data)


# 🔄 Agora aceita upload de imagem
class CurriculoViewSet(viewsets.ModelViewSet):
    queryset = models.Curriculo.objects.all()
    serializer_class = serializers.CurriculoSerializer
    parser_classes = [MultiPartParser, FormParser]  # permite upload de imagem


class VagaViewSet(viewsets.ModelViewSet):
    queryset = models.Vaga.objects.all()
    serializer_class = serializers.VagaSerializer


class CandidaturaViewSet(viewsets.ModelViewSet):
    queryset = models.Candidatura.objects.all()
    serializer_class = serializers.CandidaturaSerializer


class EmpresaViewSet(viewsets.ModelViewSet):
    queryset = models.Empresa.objects.all()
    serializer_class = serializers.EmpresaSerializer
