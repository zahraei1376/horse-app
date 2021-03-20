from flask import Flask

from src.config import Development

app = Flask(__name__)
app.config.from_object(Development)

# import extensions
from src.extensions import *


# register bluprints
from src.security import auth
from src.plans import plans

app.register_blueprint(auth)
app.register_blueprint(plans)

