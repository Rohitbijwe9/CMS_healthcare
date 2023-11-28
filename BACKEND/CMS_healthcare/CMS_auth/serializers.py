from rest_framework import serializers
from CMS_auth.models import User

class RegisterModelSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = User
        fields = ('id','first_name','last_name','username','password','email','user_type','user_code','user_image','is_active','created_on','updated_on' )
       
    def create(self, validated_data):
        return User.objects.create_user(**validated_data)
    

    
class LoginSerializer(serializers.Serializer):
        username = serializers.CharField(write_only=True)
        password = serializers.CharField()
        #email = serializers.EmailField()
        def validate(self, data):

            username = data.get("username", None)
            password = data.get("password", None)
            #email = data.get("email", None)
            if username is None or password is None:# or email is None:

                raise serializers.ValidationError("Username and password are required fields.")

            return data
        


from django.contrib.auth.tokens import PasswordResetTokenGenerator
from django.utils.http import urlsafe_base64_decode


class EmailSerializer(serializers.Serializer):
    """
    Reset Password Email Request Serializer.
    """

    username = serializers.CharField()

    class Meta:
        fields = ("username",)



# class ResetPasswordSerializer(serializers.Serializer):
#     """
#     Reset Password Serializer.
#     """

#     password = serializers.CharField(
#         write_only=True,
#         min_length=1,
#     )

#     class Meta:
#         field = ("password")

#     def validate(self, data):
#         """
#         Verify token and encoded_pk and then set new password.
#         """
#         password = data.get("password")
#         token = self.context.get("kwargs").get("token")
#         encoded_pk = self.context.get("kwargs").get("encoded_pk")

#         if token is None or encoded_pk is None:
#             raise serializers.ValidationError("Missing data.")

#         pk = urlsafe_base64_decode(encoded_pk).decode()
#         user = User.objects.get(pk=pk)
#         if not PasswordResetTokenGenerator().check_token(user, token):
#             raise serializers.ValidationError("The reset token is invalid")

#         user.set_password(password)
#         user.save()
#         return data


from django.contrib.auth.tokens import PasswordResetTokenGenerator
from django.utils.http import urlsafe_base64_decode

class ResetPasswordSerializer(serializers.Serializer):
    """
    Reset Password Serializer.
    """

    password = serializers.CharField(
        write_only=True,
        min_length=1,
    )

    class Meta:
        fields = ("password",)

    def validate(self, data):
        """
        Verify token and encoded_pk and then set a new password.
        """
        password = data.get("password")
        token = self.context.get("kwargs").get("token")
        encoded_pk = self.context.get("kwargs").get("encoded_pk")

        if token is None or encoded_pk is None:
            raise serializers.ValidationError("Missing data.")

        try:
            pk = int(urlsafe_base64_decode(encoded_pk).decode())
            user = User.objects.get(pk=pk)
        except (ValueError, User.DoesNotExist):
            raise serializers.ValidationError("Invalid user or token.")

        if not PasswordResetTokenGenerator().check_token(user, token):
            raise serializers.ValidationError("The reset token is invalid")

        user.set_password(password)
        user.save()
        return data
