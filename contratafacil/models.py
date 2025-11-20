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

@deconstructible 
class RenomearDoc(object):
    def __init__(self, subdir='curriculos/'): 
        self.subdir = subdir

    def __call__(self, instance, filename):
        extensao = filename.split('.')[-1] 
        novo_nome = f"{uuid.uuid4()}.{extensao}" 
        return os.path.join(self.subdir, novo_nome)

class Empresa(models.Model):
    cnpj = models.CharField(max_length=14, unique=True)
    nome = models.CharField(max_length=255)
    email = models.EmailField(unique=True)
    descricao = models.TextField()
    plano_pago = models.BooleanField(default=False)

    def __str__(self):
        return self.nome
    
EXTENSOES_IMG_PERMITIDAS = ['png', 'jpeg', 'jpg', 'gif', 'jfif', 'webp', 'avif', 'svg']
class Usuario(AbstractUser):
    foto_perfil = models.ImageField(upload_to=RenomearImagem("ftPerfil/"), null=True, blank=True)
    username = models.CharField("Nome", max_length=100, unique=True, null=True)
    password = models.CharField("Senha", max_length=500, null=True)
    email = models.EmailField(unique=True, null=True)
    cpf = models.CharField(max_length=11, unique=True)
    telefone = models.CharField(max_length=15, null=True, blank=True)
    empresa = models.ForeignKey(Empresa, on_delete=models.CASCADE, null=True, blank=True)

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



class Candidato(models.Model):
    AREAS = []

    plano_pago = models.BooleanField(default=False)
    # area_de_atuacao = models.CharField(choices=AREAS, null=True, blank=True)
    usuario = models.OneToOneField(Usuario, on_delete=models.CASCADE, primary_key=True, related_name="candidato")

EXTENSOES_DOC_PERMITIDAS = ['pdf']
class Curriculo(models.Model):
    nome = models.CharField(max_length=50, null=True, blank=True)
    curriculo = models.FileField(
        upload_to=RenomearDoc('curriculos/'),
        validators=[FileExtensionValidator(EXTENSOES_DOC_PERMITIDAS)],
        null=True)
    candidato = models.ForeignKey(Candidato, on_delete=models.CASCADE, related_name="Currículos")

    def __str__(self):
        return f"Currículo de {self.usuario.username}"
    
    def clean(self):
        if self.curriculo:
            arqExtencao = self.curriculo.name.split('.')[-1].lower()
            if arqExtencao not in EXTENSOES_DOC_PERMITIDAS: 
                raise ValidationError(f"Extensão {arqExtencao} não permitida. As extensões permitidas são: {', '.join(EXTENSOES_IMG_PERMITIDAS)}.")
    
    def save(self, *args, **kwargs):
        self.clean()
        super().save(*args, **kwargs)

class Vaga(models.Model):
    titulo = models.CharField(max_length=255)
    salario = models.DecimalField("Salário", max_digits=10, decimal_places=2, blank=True, null=True)
    descricao = models.TextField(null=True, blank=True)
    requisitos = models.TextField(null=True, blank=True)
    impulsionada = models.BooleanField(default=False)
    empresa = models.ForeignKey(Empresa, related_name="vagas", on_delete=models.CASCADE, null=True, blank=True)

    def __str__(self):
        return self.titulo


class Candidatura(models.Model):
    class Status(models.TextChoices):
        EM_ANALISE = "EM_ANALISE", "Em análise"
        APROVADO = "APROVADO", "Aprovado"
        REJEITADO = "REJEITADO", "Rejeitado"

    curriculo = models.ForeignKey(Curriculo, on_delete=models.CASCADE, related_name="candidaturas")
    vaga = models.ForeignKey(Vaga, on_delete=models.CASCADE, related_name="candidaturas")
    status = models.CharField(choices=Status.choices, default=Status.EM_ANALISE)
    data_candidatura = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.curriculo.candidato.usuario.username} -> {self.vaga.titulo} ({self.status})"