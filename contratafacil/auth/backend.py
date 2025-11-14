from rest_framework.authentication import TokenAuthentication
from rest_framework import exceptions

class CookieTokenAuthentication(TokenAuthentication):
    """
    Try to get token from cookie 'Token' first, then fallback to header.
    """
    def authenticate(self, request):
        token = None
        # 1) read from cookie (works for browser requests)
        if hasattr(request, "COOKIES"):
            token = request.COOKIES.get("Token")
        # 2) fallback to header (useful for non-browser clients or server-to-server)
        if not token:
            return super().authenticate(request)

        # token currently is the token key string; validate it:
        return self.authenticate_credentials(token)