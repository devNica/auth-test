from flask import jsonify
from .helpers import check_email_format
from .models import User, db, user_schema, users_schema
from sqlalchemy import exc
from .config import Config

import jwt
import graphene

class RegisterMutation(graphene.Mutation):
    
    error = graphene.String()
    message = graphene.String()
    success = graphene.Boolean()

    class Arguments:
        first_name = graphene.String(required=True)
        last_name = graphene.String(required=True)
        email = graphene.String(required=True)
        password = graphene.String(required=True)

    @classmethod
    def mutate(cls, _, info, first_name, last_name, email, password):
        if not check_email_format(email):
            return RegisterMutation(error="Make sure you pass correct email")
        

        try:
            new_user = User(first_name, last_name, email)
            new_user.set_password(password)

            db.session.add(new_user)
            db.session.commit()

        except exc.IntegrityError as e:
            return RegisterMutation(error=f'{e.orig}')

        return RegisterMutation(success=True, message="User has been created")


class AuthMutation(graphene.Mutation):
    class Arguments(object):
        email = graphene.String()
        password = graphene.String()

    access_token = graphene.String()
    #refresh_token = graphene.String()
    error = graphene.String()
    success = graphene.Boolean()

    @classmethod
    def mutate(cls, _, info, email, password):
        
        try:

            user = User.query.filter_by(email=email)
           
            if not user.first():
                return AuthMutation(error='Email not found', success=False, access_token = "")
            
            result = users_schema.dump(user)
            user_password = result[0]['password']
            
            if not check_email_format(email):
                return AuthMutation(error="Invalid Email")
            if not User.check_password(user_password, password):
                return AuthMutation(error="Wrong Credentials", success=False, access_token = "")

            token = jwt.encode({"user": result[0]}, Config.SECRET_KEY, algorithm="HS256")
            return AuthMutation(success=True, access_token= token, error = "")

        except exc.IntegrityError as e:
            return AuthMutation(error=f'{e.orig}')

class Mutation(graphene.ObjectType):
    register = RegisterMutation.Field()
    auth = AuthMutation.Field()