import graphene

class Query(graphene.ObjectType):
    message = graphene.String()

    def resolve_message(self, info, **args):
        message = "Hello World!"
        return message