from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import CustomUserViewSet, TradeViewSet

router = DefaultRouter()
router.register(r'users', CustomUserViewSet)
router.register(r'trades', TradeViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
