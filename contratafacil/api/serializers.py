from rest_framework import serializers
from contratafacil import models


class UsuarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Usuario
        fields = ["foto_perfil", "username", "senha", "email",
                  "cpf", "plano_pago", "tipo_de_usuario"]

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

class LoginSerializer(serializers.Serializer):
    username = serializers.CharField(max_length=100, default=None)
    senha = serializers.CharField(write_only=True)
    email = serializers.EmailField(default=None)