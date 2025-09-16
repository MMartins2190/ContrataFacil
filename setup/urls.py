from django.contrib import admin
from django.urls import path, include
from contratafacil.api import viewsets
from rest_framework import routers, permissions
from drf_yasg import openapi
from drf_yasg.views import get_schema_view
from django.conf import settings
from django.conf.urls.static import static



schema_view = get_schema_view(
    openapi.Info(
        title="ContrataFacil API",
        default_version='v1',
        description="API para gerenciamento de candidatos, empresas e vagas de emprego",
        terms_of_service="https://www.google.com/policies/terms/",
        contact=openapi.Contact(email="contato@example.com"),
        license=openapi.License(name="Free"),
    ),
    public=True,
    permission_classes=(permissions.AllowAny,),
)

# 🔹 Definição das rotas
router = routers.DefaultRouter()
router.register(r'usuarios', viewsets.UsuarioViewSet, basename='usuarios')
router.register(r'competencias', viewsets.CompetenciaViewSet, basename='competencias')
router.register(r'candidatos', viewsets.CandidatoViewSet, basename='candidatos')
router.register(r'curriculos', viewsets.CurriculoViewSet, basename='curriculos')
router.register(r'vagas', viewsets.VagaViewSet, basename='vagas')
router.register(r'candidaturas', viewsets.CandidaturaViewSet, basename='candidaturas')
router.register(r'empresas', viewsets.EmpresaViewSet, basename='empresas')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include(router.urls)),
    path('swagger.json/', schema_view.without_ui(cache_timeout=0), name='schema-json'),
    path('swagger/', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
    path('redoc/', schema_view.with_ui('redoc', cache_timeout=0), name='schema-redoc'),
]

# 🔹 Suporte a arquivos de mídia (fotos de perfil)
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
