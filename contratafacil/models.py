from django.db import models
from django.core.validators import FileExtensionValidator
from django.contrib.auth.models import AbstractUser


class Usuario(AbstractUser):
    TIPOS = [
        {"candidato", "Candidato"},
        {"empresa", "Empresa"}
        ]

    foto_perfil = models.ImageField(upload_to="ftPerfil/", null=True, blank=True)
    username = models.CharField("Nome", max_length=100, unique=True, null=True)
    password = models.CharField("Senha", max_length=500, null=True)
    email = models.EmailField(unique=True, null=True)
    cpf = models.CharField(max_length=11, unique=True)
    plano_pago = models.BooleanField(default=False)
    tipo_de_usuario = models.CharField(choices=TIPOS, null=True)

    def __str__(self):
        return self.username

class Curriculo(models.Model):
    ALLOWED_EXTENSIONS = ['pdf']

    curriculos = models.FileField(upload_to='curriculos/', validators=[FileExtensionValidator(ALLOWED_EXTENSIONS)], null=True)
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
