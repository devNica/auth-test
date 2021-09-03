from flask import request
from app import create_app
from app.migrate import init_db
from app.schema import schema
from flask_graphql import GraphQLView
import graphene

app = create_app()

#this route has the purpose of migrating the model to the database 
@app.route('/initdb', methods=['GET'])
def database():
    init_db()
    return "All models has been created successfully"

#this route to queries and mutations 
app.add_url_rule('/graphql', view_func=GraphQLView.as_view(
    'graphql',
    schema = schema,
    graphiql=True,
))