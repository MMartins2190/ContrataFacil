import os, uuid
from django.db import models
from django.core.validators import FileExtensionValidator
from django.contrib.auth.models import AbstractUser
from django.core.exceptions import ValidationError
from django.utils.deconstruct import deconstructible

@deconstructible 
class RenomearImagem(object):
    def __init__(self, subdir='ftPerfil/'): 
        self.subdir = subdir

    def __call__(self, instance, filename):
        extensao = filename.split('.')[-1] 
        novo_nome = f"{uuid.uuid4()}.{extensao}" 
        return os.path.join(self.subdir, novo_nome)

EXTENSOES_IMG_PERMITIDAS = ['png', 'jpeg', 'jpg', 'gif', 'jfif', 'webp', 'avif', 'svg']
class Usuario(AbstractUser):
    TIPOS = [
        {"candidato", "Candidato"},
        {"empresa", "Empresa"}
        ]

    foto_perfil = models.ImageField(upload_to=RenomearImagem("ftPerfil/"), null=True, blank=True)
    username = models.CharField("Nome", max_length=100, unique=True, null=True)
    password = models.CharField("Senha", max_length=500, null=True)
    email = models.EmailField(unique=True, null=True)
    cpf = models.CharField(max_length=11, unique=True)
    telephone = models.CharField(max_length=15, null=True, blank=True)
    # Temporariamente removidos para testes.
    # plano_pago = models.BooleanField(default=False)
    # tipo_de_usuario = models.CharField(choices=TIPOS, null=True)

    def __str__(self):
        return self.username
    
    def clean(self):
        if self.foto_perfil:
            imgExtencao = self.foto_perfil.name.split('.')[-1].lower()
            if imgExtencao not in EXTENSOES_IMG_PERMITIDAS: 
                raise ValidationError(f"Extensão {imgExtencao} não permitida. As extensões permitidas são: {', '.join(EXTENSOES_IMG_PERMITIDAS)}.")
    
    def save(self, *args, **kwargs):
        self.clean()
        super().save(*args, **kwargs)

class Curriculo(models.Model):
    EXTENSOES_PERMITIDAS = ['pdf']

    curriculos = models.FileField(upload_to='curriculos/', validators=[FileExtensionValidator(EXTENSOES_PERMITIDAS)], null=True)
    usuario = models.ForeignKey(Usuario, on_delete=models.CASCADE, related_name="curriculos")

    def __str__(self):
        return f"Currículo de {self.usuario.username}"


class Vaga(models.Model):
    titulo = models.CharField(max_length=255)
    descricao = models.TextField(null=True, blank=True)
    requisitos = models.TextField(null=True, blank=True)  # pode ser JSON no futuro
    impulsionada = models.BooleanField(default=False)

    def __str__(self):
        return self.titulo


class Candidatura(models.Model):
    class Status(models.TextChoices):
        EM_ANALISE = "EM_ANALISE", "Em análise"
        APROVADO = "APROVADO", "Aprovado"
        REJEITADO = "REJEITADO", "Rejeitado"

    candidato = models.ForeignKey(Usuario, on_delete=models.CASCADE, related_name="candidaturas")
    vaga = models.ForeignKey(Vaga, on_delete=models.CASCADE, related_name="candidaturas")
    status = models.CharField(max_length=20, choices=Status.choices, default=Status.EM_ANALISE)
    data_candidatura = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.candidato.usuario.username} -> {self.vaga.titulo} ({self.status})"


class Empresa(models.Model):
    cnpj = models.CharField(max_length=14, unique=True)
    nome = models.CharField(max_length=255)
    email = models.EmailField(unique=True)
    descricao = models.TextField()
    

    def __str__(self):
        return self.nome
