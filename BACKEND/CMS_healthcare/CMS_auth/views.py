import http
from django.shortcuts import render, redirect
from rest_framework.views import APIView
from rest_framework.response import Response
from CMS_auth.serializer import RegisterModelSerializer,LoginSerializer, EmailSerializer, ResetPasswordSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework import status
from django.contrib.auth import get_user_model
from django.core.mail import send_mail
from django.conf import settings
from rest_framework.authtoken.models import Token
from .utils import detectUser
from rest_framework.generics import get_object_or_404
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.tokens import RefreshToken




class RegisterAPIView(APIView):
    def post(self, request):
        serializer = RegisterModelSerializer(data=request.data)

        if serializer.is_valid():
            to_email=serializer.validated_data.get('email')           
            name=serializer.validated_data.get ('username')
            password=serializer.validated_data.get('password')
            user = serializer.save()
            user.is_active = True 
            token, created = Token.objects.get_or_create(user=user)

            # Set user type based on the token 
            if 'admin' in token.key.lower():
                user.user_type = 'Admin'
            elif 'doctor' in token.key.lower():
                user.user_type = 'Doctor'
            elif 'wardboy' in token.key.lower():
                user.user_type = 'Wardboy'
            elif 'nurse' in token.key.lower():
                user.user_type = 'Nurse'
            elif 'receptionist' in token.key.lower():
                user.user_type = 'Receptionist'
            
            user.save()
 
            # to_email = serializer.email['email']
            print(to_email)
            print(name)
            print(password)
            from_email=settings.EMAIL_HOST_USER
            subject='User Registration'
            message=f'Hello Your Username is:{name} & Your Password is:{password} !!! Thank you for registration '
            send_mail(subject,message,from_email, [to_email])
            

            # Create a response dictionary to include the user's activation status
            response_data = {
                'message': 'Your account is created ',
                'is_active': user.is_active,
                'user_type': user.user_type,
            }

            return Response(data=response_data, status=status.HTTP_201_CREATED)

        return Response(data=serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    

    def get(self, request, pk=None):

        if pk is not None:
            
            user = get_object_or_404(User, pk=pk)
            serializer = RegisterModelSerializer(user)
            return Response(serializer.data)
        else:
            # Handle the case for listing all users
            users = User.objects.all()
            serializer = RegisterModelSerializer(users, many=True)
            return Response(serializer.data)
    
    

    def put(self, request, *args, **kwargs):
        id = kwargs.get('pk')
        user = get_object_or_404(User, pk=id)
        serializer = RegisterModelSerializer(user, data=request.data, partial=False)

        if serializer.is_valid():
            # Update the user's information
            serializer.save()

            # Create a response dictionary
            response_data = {
                'message': 'User information updated successfully',
            }

            return Response(data=response_data, status=status.HTTP_200_OK)

        return Response(data=serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    

    def delete(self, request, pk=None):
        if pk is not None:
            # Retrieve the user with the specified ID
            user = get_object_or_404(User, pk=pk)
            
            # Delete the user
            user.delete()

            # Create a response dictionary
            response_data = {
                'message': f'User with ID {pk} deleted successfully',
            }

            return Response(data=response_data, status=status.HTTP_204_NO_CONTENT)
        else:
            # If 'pk' is not provided, return a 400 Bad Request response
            response_data = {
                'error': 'User ID (pk) is required for deletion',
            }
            return Response(data=response_data, status=status.HTTP_400_BAD_REQUEST)

class LoginAPIView(TokenObtainPairView):
    
    def post(self,request):
            serializer = LoginSerializer(data=request.data)
            if serializer.is_valid():

                username = serializer.validated_data['username']
                #email = serializer.validated_data['email']
                print(username)
                user = User.objects.get(username=username)
        
                print(user)
                
        
                
            response = super().post(request)
            if response.status_code == status.HTTP_200_OK:
                     
                     redirectURL = detectUser(user)
                    
                     url_data = {'redirectURL':redirectURL,'username':username}
                     response.data.update(url_data)
                     return Response(data=response.data)
            return Response(data=serializer.errors,status=status.HTTP_400_BAD_REQUEST)
    

from rest_framework import generics, status, viewsets, response
from rest_framework.exceptions import ValidationError
from django.contrib.auth import get_user_model
from django.contrib.auth.tokens import default_token_generator
from django.urls import reverse
from django.utils.encoding import force_bytes
from django.utils.http import urlsafe_base64_encode
from django.core.mail import EmailMessage
from . import serializer

User = get_user_model()


class PasswordReset(generics.GenericAPIView):
    """
    Request for Password Reset Link.
    """

    serializer_class = serializer.EmailSerializer

    def post(self, request):
        """
        Create token.
        """
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)
        username = serializer.data["username"]
        user = User.objects.filter(username=username).first()
        if user:
            token = default_token_generator.make_token(user)
            
            reset_url = reverse(
    "reset-password",
    kwargs={"uidb64": urlsafe_base64_encode(force_bytes(user.pk)), "token": token},
)
            reset_link = f"http://localhost:3000{reset_url}"

            # send the rest_link as mail to the user.
            email = EmailMessage(
                'Password Reset Request',
                f'Use the link below to reset your password: {reset_link}',
                to=[user.email],
            )
            email.send()

            return response.Response(
                {"message": "An email with password reset instructions has been sent to you."},
                status=status.HTTP_200_OK,
            )
        else:
            raise ValidationError({"email": "User doesn't exists"})



from django.utils.http import urlsafe_base64_decode

class ResetPasswordAPI(generics.GenericAPIView):
    """
    Verify and Reset Password Token View.
    """

    serializer_class = serializer.ResetPasswordSerializer

    def get(self, request, *args, **kwargs):
        """
        Verify token & uidb64.
        """
        uidb64 = kwargs.get('uidb64')
        token = kwargs.get('token')
        try:
              
              uid_bytes = urlsafe_base64_decode(uidb64 + '===')
              uid = uid_bytes.decode('utf-8')
              user = User.objects.get(pk=uid)
        except (TypeError, ValueError, OverflowError, User.DoesNotExist) as e:
             raise ValidationError({"detail": [f"Error decoding uidb64 or retrieving user: {e}"]})

        if default_token_generator.check_token(user, token):
            #password=request.data.get()
            return response.Response(
                {"message": "Token verification successful"},
                status=status.HTTP_200_OK,
            )
        else:
            raise ValidationError({"detail": ["Invalid token"]})
    
    def post(self, request, *args, **kwargs):
        """
        Reset the password.
        """
        uidb64 = kwargs.get('uidb64')
        token = kwargs.get('token')
        new_password = request.data.get('password')

        try:
            uid_bytes = urlsafe_base64_decode(uidb64 + '===')
            uid = uid_bytes.decode('utf-8')
            user = User.objects.get(pk=uid)
        except (TypeError, ValueError, OverflowError, User.DoesNotExist) as e:
            raise ValidationError({"detail": [f"Error decoding uidb64 or retrieving user: {e}"]})

        if default_token_generator.check_token(user, token):
            # Token verification successful, reset the password
            user.set_password(new_password)
            user.save()

            return response.Response(
                {"message": "Password reset successful"},
                status=status.HTTP_200_OK,
            )
        else:
            raise ValidationError({"detail": ["Invalid token"]})
    



class LogoutAPIView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        try:
            refresh_token = request.data["refresh_token"]
            token = RefreshToken(refresh_token)
            token.blacklist()

            return Response(data={"detail": "Logout successful"}, status=status.HTTP_200_OK)
        except Exception as e:
            return Response(data={"detail": "Invalid or expired token"}, status=status.HTTP_400_BAD_REQUEST)