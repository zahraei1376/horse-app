from flask import Blueprint


auth = Blueprint('auth', __name__, url_prefix='/auth/')


from src.security import models, views