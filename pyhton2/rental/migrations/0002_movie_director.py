# Generated by Django 3.0.2 on 2020-01-09 23:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('rental', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='movie',
            name='director',
            field=models.CharField(default='', max_length=250),
            preserve_default=False,
        ),
    ]
