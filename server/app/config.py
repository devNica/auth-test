class Config:
    """" Clase de configuracion de Flask """
    SECRET_KEY = "1uc@54NdR35m@Rs531"
    SQLALCHEMY_DATABASE_URI = 'mysql+pymysql://root:windows@localhost/luxdev_test'
    SQLALCHEMY_TRACK_MODIFICATIONS = False