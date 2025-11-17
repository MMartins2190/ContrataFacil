from rest_framework import serializers
from contratafacil import models
from django.contrib.auth.hashers import make_password


class UsuarioSerializer(serializers.ModelSerializer):
    # write_only=True oculta o password da resposta, mas ainda
    # salva no banco certo.
    password = serializers.CharField(write_only=False)
    def create(self, validated_data):
        validated_data["password"] = make_password(validated_data["password"])
        return super().create(validated_data)
        
    def update(self, instance, validated_data):
        if 'password' in validated_data:
            validated_data['password'] = make_password(validated_data['password'])
            return super().update(instance, validated_data)
    class Meta:
        model = models.Usuario
        fields = ["foto_perfil", "username", "password", "email",
                  "cpf", "telefone", "empresa"]        

class CandidatoSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Candidato
        fields = "__all__"

# 🔄 Agora trabalha com imagem
class CurriculoSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Curriculo
        fields = '__all__'
        extra_kwargs = {
            'curriculo': {'help_text': 'Arquivo de documento contendo currículo (PDF)'},
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
    username = serializers.CharField()
    password = serializers.CharField(write_only=True)