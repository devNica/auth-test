import graphene
from .mutations import Mutation
from .queries import Query


schema = graphene.Schema(mutation=Mutation, query=Query)