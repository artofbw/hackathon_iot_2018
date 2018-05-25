from graphene_django import DjangoObjectType
import graphene


class Query(graphene.ObjectType):
    user = graphene.String()

schema = graphene.Schema(query=Query)
