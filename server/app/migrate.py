from .models import *

def create_db():
    """ Metodo de Creacion de los modelos de la base de datos """
    db.drop_all()
    db.create_all()

def init_db():
    """ Metodo de inicializacion de la base de datos """
    create_db()
    # seeder
    # user = User(
    #     first_name = "Lucas Andres",
    #     last_name = "Marsell",
    #     email = "test@epitech.com",
    # )

    # user.set_password("general123*")
    # db.session.add(user)
    # db.session.commit()