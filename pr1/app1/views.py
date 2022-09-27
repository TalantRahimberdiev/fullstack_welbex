
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

from app1.models import Materials
from app1.serializers import Materials_Ser

@api_view(['GET', 'POST'])
def app1_list(request):
    if request.method == 'GET':
        data = Materials.objects.all()

        serializer = Materials_Ser(data, context={'request': request}, many=True)

        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = Materials_Ser(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['PUT', 'DELETE'])
def app1_detail(request, details):
    try:
        material = Materials.objects.get(pk=details)
    except Materials.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'PUT':
        serializer = Materials_Ser(material, data=request.data,context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_204_NO_CONTENT)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        material.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)