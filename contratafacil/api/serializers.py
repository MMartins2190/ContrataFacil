from rest_framework import serializers
from contratafacil import models


class UsuarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Usuario
        fields = '__all__'
        

class CompetenciaSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Competencia
        fields = '__all__'

# 🔄 Agora trabalha com imagem
class CurriculoSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Curriculo
        fields = '__all__'
        extra_kwargs = {
            'imagem': {'help_text': 'Imagem do currículo (formato JPG, PNG etc.)'},
            'usuario': {'help_text': 'Usuário dono do currículo'},
        }


class VagaSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Vaga
        fields = '__all__'


class CandidaturaSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Candidatura
        fields = '__all__'


class EmpresaSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Empresa
        fields = '__all__'
