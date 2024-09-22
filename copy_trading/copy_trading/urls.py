from django.urls import path, include
from rest_framework.routers import DefaultRouter
from trading.views import AuthViewSet

router = DefaultRouter()
router.register(r'users', AuthViewSet, basename='users')

urlpatterns = [
    path('', include(router.urls)),
]