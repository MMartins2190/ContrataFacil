from rest_framework import serializers
from contratafacil import models


class UsuarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Usuario
        fields = '__all__'
        extra_kwargs = {
            'fotoPerfil': {'help_text': 'Foto de perfil do usuário'},
            'nome': {'help_text': 'Nome do usuário'},
            'senha': {'help_text': 'Senha do usuário'},
            'email': {'help_text': 'E-mail do usuário'},
            'cpf': {'help_text': 'CPF do usuário'},
        }


class CompetenciaSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Competencia
        fields = '__all__'


class CandidatoSerializer(serializers.ModelSerializer):
    competencias = CompetenciaSerializer(many=True, read_only=True)

    class Meta:
        model = models.Candidato
        fields = '__all__'
        extra_kwargs = {
            'planopago': {'help_text': 'Se o candidato possui plano pago'},
            'perfil_linkedin': {'help_text': 'Perfil do Linkedin do candidato'},
            'usuario': {'help_text': 'ID do usuário associado'},
        }


class CurriculoSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Curriculo
        fields = '__all__'


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
