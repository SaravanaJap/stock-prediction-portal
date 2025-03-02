from django.contrib.auth.models import User
from rest_framework import serializers

class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only = True, min_length = 4,style = {'input_type':'password'})
    class Meta:
        model = User
        fields = ['username','email','password']

    def create(self, validated_data):
        #User.objects.create_user  this create_user automatically hash the password other store as plain text

        user = User.objects.create_user(
            validated_data['username'],
            validated_data['email'],
            validated_data['password'],
        )
        return user