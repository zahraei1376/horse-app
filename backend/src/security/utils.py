from random import randint
from datetime import datetime, timedelta

from src.security.models import Verification, User


def generate_opt_code(length=6):
    """Generate opt code"""
    return randint(100000, 1000000)


def send_otp_code(phone, code):
    pass


def generate_verification() -> Verification:
    """generate verification model"""
    opt_code = generate_opt_code()
    verification = Verification()
    verification.auth_code = opt_code
    verification.expire_datetime = datetime.now() + timedelta(minutes=2)

    return verification


def generate_user(username: str, password: str):
    """Generate User model"""
    new_user = User()
    new_user.username = username
    new_user.password = password

    return new_user
