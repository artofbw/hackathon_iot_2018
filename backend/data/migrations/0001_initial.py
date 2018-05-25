# Generated by Django 2.0.5 on 2018-05-25 20:35

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='ParticulateMatter',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('pm100', models.IntegerField()),
                ('pm10', models.IntegerField()),
                ('pm25', models.IntegerField()),
            ],
        ),
        migrations.CreateModel(
            name='Payload',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('city', models.CharField(max_length=50)),
                ('humidity', models.IntegerField()),
                ('temperature', models.IntegerField()),
                ('particulate_matter', models.OneToOneField(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='payload_part_matter', to='data.ParticulateMatter')),
            ],
        ),
    ]