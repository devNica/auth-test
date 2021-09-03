from flask import Flask
from flask_cors import CORS
from .config import Config
from .models import db, ma


def create_app():
    """ Metodo para la creacion de app de Flask. """
    
    app = Flask(__name__)
    CORS(app)
    app.config.from_object(Config)
    

    db.init_app(app)
    ma.init_app(app)

    return app