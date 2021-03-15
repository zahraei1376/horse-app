from flask import Flask
from src.config import Development

app = Flask(__name__)
app.config.from_object(Development)
