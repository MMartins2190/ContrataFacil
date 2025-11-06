from rest_framework import serializers
from contratafacil import models
from django.contrib.auth.hashers import make_password


class UsuarioSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)
    class Meta:
        model = models.Usuario
        fields = ["foto_perfil", "username", "password", "email",
                  "cpf", "telephone"]
        read_only_fields = ["id"]
        
        def create(self, validated_data):
            validated_data["password"] = make_password(validated_data["password"])
            return super().create(validated_data)
        
        def update(self, instance, validated_data):
            if 'password' in validated_data:
                validated_data['password'] = make_password(validated_data['password'])
            return super().update(instance, validated_data)

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
    password = serializers.CharField(write_only=True)
    email = serializers.EmailField(default=None)