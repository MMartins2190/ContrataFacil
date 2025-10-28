from django.db import models
from django.core.validators import FileExtensionValidator


class Usuario(models.Model):
    fotoPerfil = models.ImageField(upload_to="ftPerfil/", null=True, blank=True)
    nome = models.CharField(max_length=100)
    senha = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    cpf = models.CharField(max_length=11, unique=True)

    def __str__(self):
        return self.nome


class Competencia(models.Model):
    nome = models.CharField(max_length=120)
    nivel = models.CharField(max_length=50)

    def __str__(self):
        return f"{self.nome} ({self.nivel})"


class Curriculo(models.Model):
    ALLOWED_EXTENSIONS = ['pdf']

    curriculos = models.FileField(upload_to='curriculos/', validators=[FileExtensionValidator(ALLOWED_EXTENSIONS)], null=True)
    usuario = models.ForeignKey(Usuario, on_delete=models.CASCADE, related_name="curriculos")

    def __str__(self):
        return f"Currículo de {self.usuario.nome}"


class Vaga(models.Model):
    titulo = models.CharField(max_length=255)
    descricao = models.TextField()
    requisitos = models.TextField()  # pode ser JSON no futuro
    impulsionado = models.BooleanField(default=False)

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
        return f"{self.candidato.usuario.nome} -> {self.vaga.titulo} ({self.status})"


class Empresa(models.Model):
    cnpj = models.CharField(max_length=14, unique=True)
    nome = models.CharField(max_length=255)
    email = models.EmailField(unique=True)
    descricao = models.TextField()
    

    def __str__(self):
        return self.nome
