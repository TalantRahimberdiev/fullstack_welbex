
from rest_framework import serializers
from .models import Materials

class Materials_Ser(serializers.ModelSerializer):

    class Meta:
      model = Materials 
      fields = ('__all__')
