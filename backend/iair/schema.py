from graphene_django import DjangoObjectType
import graphene

from data.models import Payload, ParticulateMatter


class ParticulateMatter_graph(DjangoObjectType):
    class Meta:
        model = ParticulateMatter


class Payload_graph(DjangoObjectType):
    part_matter = graphene.Field(ParticulateMatter_graph)

    class Meta:
        model = Payload



class Query(graphene.ObjectType):
    payloads = graphene.List(Payload_graph)

    def resolve_payloads(self, info):
        return Payload.objects.all()


schema = graphene.Schema(query=Query)
