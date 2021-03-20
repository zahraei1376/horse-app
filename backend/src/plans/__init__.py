from flask import Blueprint


plans = Blueprint('plans', __name__, url_prefix='/plans')

from src.plans import models, views
