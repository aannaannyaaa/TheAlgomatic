from django.test import TestCase

import requests
import json

BASE_URL = 'http://127.0.0.1:8000'

def test_signup():
    url = f"{BASE_URL}/users/signup/"
    data = {
        "username": "testuser",
        "password": "testpassword123"
    }
    response = requests.post(url, json=data)
    print("Signup Response:", response.status_code)
    print(response.json())
    return response.json()

def test_signin(username, password):
    url = f"{BASE_URL}/users/signin/"
    data = {
        "username": username,
        "password": password
    }
    response = requests.post(url, json=data)
    print("Signin Response:", response.status_code)
    print(response.json())
    return response.json()

def test_verify_otp(user_id, otp):
    url = f"{BASE_URL}/users/verify_otp/"
    data = {
        "user_id": user_id,
        "otp": otp
    }
    response = requests.post(url, json=data)
    print("OTP Verification Response:", response.status_code)
    print(response.json())

if __name__ == "__main__":
    # Test signup
    signup_data = test_signup()
    
    # Test signin
    signin_data = test_signin("testuser", "testpassword123")
    
    # For OTP verification, you'll need to manually enter the OTP
    # from your authenticator app
    user_id = signin_data.get('user_id')
    otp = input("Enter the OTP from your authenticator app: ")
    test_verify_otp(user_id, otp)
