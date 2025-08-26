from django.db import models

class Usuario(models.Model):
    nome = models.CharField(max_length=100)
    senha = models.CharField(max_length=100)
    email = models.EmailField()
    iduser = models.AutoField(primary_key=True)
    
class Candidato(models.Model):
    planopago = models.BooleanField()
    competencias = models.listField()
    perfil_likendin = models.URLField()
    usuario = models.ForeignKey(Usuario, on_delete=models.CASCADE)

class Curriculo(models.Model):
    estrutura = models.CharField(max_length=100)
    texto = models.CharField()
    avaliacoesla = models.CharField()
    iduser = models.ForeignKey(Usuario, on_delete=models.CASCADE)

class Competencia(models.Model):
    nome = models.CharField(max_length=120)
    nivel = models.CharField(max_length=50)

class Vaga(models.Model):
    titulo = models.CharField(max_length=255)
    descricao = models.TextField()
    requisitos = models.TextField()  # Lista/JSON de requisitos
    impulsionado = models.BooleanField(default=False)

class Candidatura(models.Model):
    class Status(models.TextChoices):
        EM_ANALISE = "EM_ANALISE", "Em análise"
        APROVADO = "APROVADO", "Aprovado"
        REJEITADO = "REJEITADO", "Rejeitado"

    candidato = models.ForeignKey(Candidato, on_delete=models.CASCADE, related_name="candidaturas")
    vaga = models.ForeignKey(Vaga, on_delete=models.CASCADE, related_name="candidaturas")
    status = models.CharField(max_length=20, choices=Status.choices, default=Status.EM_ANALISE)
    data_candidatura = models.DateTimeField(auto_now_add=True)
    
class Empresa(models.Model):
    cnpj = models.CharField(max_length=14, unique=True)
    nome = models.CharField(max_length=255)
    email = models.EmailField(unique=True)
    descricao = models.TextField()