from django.db import models

# Create your models here.


class ParticulateMatter(models.Model):
    pm100 = models.IntegerField()
    pm10 = models.IntegerField()
    pm25 = models.IntegerField()


class Payload(models.Model):
    city = models.CharField(max_length=50)
    humidity = models.IntegerField()
    particulate_matter = models.OneToOneField(
        ParticulateMatter, null=True, blank=True,
        on_delete=models.CASCADE,
        related_name='payload_part_matter'
    )
    temperature = models.IntegerField()
