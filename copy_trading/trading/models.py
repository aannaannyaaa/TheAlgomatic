from django.contrib.auth.models import AbstractUser
from django.db import models
import pyotp

class CustomUser(AbstractUser):
    otp_secret = models.CharField(max_length=16, blank=True, null=True)

    def get_otp_secret(self):
        if not self.otp_secret:
            self.otp_secret = pyotp.random_base32()
            self.save()
        return self.otp_secret

    def verify_otp(self, otp):
        totp = pyotp.TOTP(self.get_otp_secret())
        return totp.verify(otp)