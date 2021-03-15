from sqlalchemy.orm import validates, relationship
from sqlalchemy import Column, Integer, String, Boolean, DateTime, ForeignKey
from werkzeug.security import generate_password_hash, check_password_hash

from src.main import db


class User(db.Model):
    __tablename__ = 'users'

    id = Column(Integer(), primary_key=True)
    username = Column(String(32), nullable=False, unique=True)
    password = Column(String(128), nullable=False)
    active = Column(Boolean(), nullable=False, default=False)
    name = Column(String(64), nullable=True)
    state = Column(String(64), nullable=True)
    city = Column(String(64), nullable=True)
    role = Column(String(16), nullable=False, default='USER')
    verifications = relationship('Verification', backref='user', lazy=True)

    @validates('password')
    def validate_password(self, key, value):
        if not value:
            raise ValueError('Password can\'t be empty')
        if len(value) < 6:
            raise ValueError('Password should be at least 6 character')
        return generate_password_hash(value)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    def __str__(self) -> str:
        return self.username


class Verification(db.Model):
    id = Column(Integer(), primary_key=True)
    auth_code = Column(String(8), nullable=False)
    expire_datetime = Column(DateTime())
    user_id = Column(Integer(), ForeignKey('users.id'), nullable=False)