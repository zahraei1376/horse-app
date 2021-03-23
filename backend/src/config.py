import os


class Base:
    SECRET_KEY = os.getenv('SECRET_KEY', 'somewhat-secure')
    JWT_SECRET_KEY = os.getenv('JWT_SECRET_KEY', 'super-secret')
    SQLALCHEMY_TRACK_MODIFICATIONS = False


class Development(Base):
    DEBUG = True
    SQLALCHEMY_DATABASE_URI = 'sqlite:////tmp/horsedb.db'

    
class Production(Base):
    DEBUG = False
    SQLALCHEMY_DATABASE_URI = os.getenv('SQLALCHEMY_DATABASE_URI')
