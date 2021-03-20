from flask import Blueprint

purchase = Blueprint('purchase', __name__, url_prefix='/purchase')

from src.purchase import views, models
