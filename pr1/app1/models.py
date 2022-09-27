
from django.db import models


class Materials(models.Model):
   title = models.CharField(max_length=70)
   quantity=models.IntegerField()
   date=models.DateField()
   distance=models.IntegerField()

   def __str__(self):
      return "%s %s" % (self.title, self.date )
