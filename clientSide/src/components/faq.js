
import { Accordion, Code } from "@mantine/core"

export default function Faq() {
   return (
      <div>
         <Accordion
            variant="filled"
            styles={{
               chevron: {
                  '&[data-rotate]': {
                     transform: 'rotate(180deg)',
                  },
               },
            }}
         >
            <Accordion.Item value="1">
               <Accordion.Control>data base - django_model</Accordion.Control>
               <Accordion.Panel>
                  <Code>
                     from django.db import models <br />
                     class Materials(models.Model):<br />
                     title = models.CharField(max_length=70)<br />
                     quantity=models.IntegerField()<br />
                     date=models.DateField()<br />
                     distance=models.IntegerField()<br />
                     def __str__(self):<br />
                     return "%s %s" % (self.title, self.date )<br />
                  </Code>
               </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item value="2">
               <Accordion.Control>serializers - djangorestframework </Accordion.Control>
               <Accordion.Panel>
                  <Code>
                     from rest_framework import serializers <br />
                     from .models import Materials<br />
                     class Materials_Ser(serializers.ModelSerializer):<br />
                     <br />
                     class Meta:<br />
                     model = Materials<br />
                     fields = ('__all__')<br />
                  </Code>
               </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item value="3">
               <Accordion.Control>views </Accordion.Control>
               <Accordion.Panel>
                  <Code>
                     from rest_framework.response import Response<br />
                     from rest_framework.decorators import api_view<br />
                     from rest_framework import status<br />

                     from app1.models import Materials<br />
                     from app1.serializers import Materials_Ser<br />
                     <br />
                     @api_view(['GET', 'POST'])<br />
                     def app1_list(request):<br />
                     if request.method == 'GET':<br />
                     data = Materials.objects.all()<br />
                     <br />
                     serializer = Materials_Ser(data, context={`request: request`}, many=True)<br />
                     <br />
                     return Response(serializer.data)<br />
                     <br />
                     elif request.method == 'POST':<br />
                     serializer = Materials_Ser(data=request.data)<br />
                     if serializer.is_valid():<br />
                     serializer.save()<br />
                     return Response(status=status.HTTP_201_CREATED)<br />

                     return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)<br />

                     <br />
                     @api_view(['PUT', 'DELETE'])<br />
                     def app1_detail(request, details):<br />
                     try:<br />
                     material = Materials.objects.get(pk=details)<br />
                     except Materials.DoesNotExist:<br />
                     return Response(status=status.HTTP_404_NOT_FOUND)<br />

                     if request.method == 'PUT':<br />
                     serializer = Materials_Ser(material, data=request.data,context={`request: request`})<br />
                     if serializer.is_valid():<br />
                     serializer.save()<br />
                     return Response(status=status.HTTP_204_NO_CONTENT)<br />
                     return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)<br />
                     <br />
                     elif request.method == 'DELETE':<br />
                     material.delete()<br />
                     return Response(status=status.HTTP_204_NO_CONTENT)<br />
                  </Code>
               </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item value="4">
               <Accordion.Control> rtk queries </Accordion.Control>
               <Accordion.Panel>
                  <Code block>
                     {
                        `
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const API = createApi({
  reducerPath: 'anything',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000' }),
  tagTypes: ['app1'],
  endpoints: (builder) => ({

    list: builder.query({
      query: () => "app1/",
      providesTags: ['app1']
    }),

    addMaterial: builder.mutation({
      query: (material) => ({
        url: "app1/",
        method: "POST",
        body: material
      }),
      invalidatesTags: ['app1']
    }),

    updateMaterial: builder.mutation({
      query: ({ details, ...rest }) => ({
        url: 'app1/'$''{details}',
        method: "PUT",
        body: rest
      }), invalidatesTags: ['app1']
    }),

    deleteMaterial: builder.mutation({
      query: id => ({
        url: '/app1/'$''{id}',
        method: "DELETE"
      }),
      invalidatesTags: ['app1']
    })
  })
})

export const { useListQuery, useAddMaterialMutation, useUpdateMaterialMutation, useDeleteMaterialMutation } = API

                        `
                     }
                  </Code>
               </Accordion.Panel>
            </Accordion.Item>

         </Accordion>
      </div>
   )
}