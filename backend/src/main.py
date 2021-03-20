from flask import Flask

from src.config import Development

app = Flask(__name__)
app.config.from_object(Development)

# import extensions
from src.extensions import *


# register bluprints
from src.security import auth
from src.plans import plans
from src.purchase import purchase

app.register_blueprint(auth)
app.register_blueprint(plans)
app.register_blueprint(purchase)

