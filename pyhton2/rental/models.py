from django.db import models

'''
    field:
        Char - characters
        int - whole numbers
        float - decimals
        Boolean
'''
# Migration steps:
# 1 - Make migrations
# 2 - (migrate) apply migrations


# Create your models here.

class Genre(models.Model):
    name = models.CharField(max_length = 250)

    def __str__(self):
        return self.name

class Movie(models.Model):
    title = models.CharField(max_length = 250)
    star = models.CharField(max_length = 250)
    release_year = models.IntegerField()
    price = models.FloatField()
    in_stock = models.IntegerField()
    # 1 to many 
    genre = models.ForeignKey(Genre, on_delete=models.CASCADE)
    in_4k = models.BooleanField()
    director = models.CharField(max_length = 250)
    image_url = models.TextField()

    def __str__(self):
        return str(self.release_year) + " " + self.title