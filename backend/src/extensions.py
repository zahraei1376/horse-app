from flask_sqlalchemy import SQLAlchemy
from flask_jwt_extended import JWTManager
from flask_migrate import Migrate

from src.main import app


db = SQLAlchemy(app)
migrate = Migrate(app, db)
jwt_manager = JWTManager(app)
