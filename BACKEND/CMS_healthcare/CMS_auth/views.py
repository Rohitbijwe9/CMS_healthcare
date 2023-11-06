from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import RegisterModelSerializer,LoginSerializer#UserSerializer #ContactDetailSerializer,ServiceProviderSerializer
from .models import User
from CMS_HC_application.models import ContactDetails
from CMS_patient_sheduling.models import ServiceProvider
from django.shortcuts import render
from rest_framework_simplejwt.views import token_obtain_pair,TokenObtainPairView
from rest_framework import status


#class UserRegisterAPI(viewsets.ModelViewSet):
 #   serializer_class=UserSerializer
  #  queryset=User.objects.all()
    
   # def post(self,request,*args,**kwargs):
    #    serializer=self.get_serializer(data=request.data)
     #   if serializer.is_valid():
      #      obj=serializer.save()
       #     obj.service_provider=request.service_provider
        #    obj.save()
         #   return Response(data=serializer.data,status=201)
        #return Response(data=serializer.errors,status=400)

class RegisterAPIView(APIView):
       
    def post(self,request):
        serializer=RegisterModelSerializer(data=request.data)
        print(request.data.get('role'))
        if serializer.is_valid():
            
            serializer.save()
            
            return Response(data={'message':'Your account is created and check mail for account activation link'},status=status.HTTP_201_CREATED)
        return Response(data=serializer.errors,status=status.HTTP_400_BAD_REQUEST)

class LoginAPIView(TokenObtainPairView):
    
    def post(self,request):
            serializer = LoginSerializer(data=request.data)
            print('line1')
            if serializer.is_valid():
                print('line2')

                username = serializer.validated_data['username']
                print(username)
                user = User.objects.get(username=username)
                print(user)
                
                response = super().post(request)
                if response.status_code == status.HTTP_200_OK:
                    return Response(data=response.data)
            return Response(data=serializer.errors,status=status.HTTP_400_BAD_REQUEST)
    



#class ServiceProviderViewSet(viewsets.ModelViewSet):
 #   queryset = ServiceProvider.objects.all()
  #  serializer_class = ServiceProviderSerializer

#class ContactDetailsViewSet(viewsets.ModelViewSet):
 #   queryset = ContactDetails.objects.all()
  #  serializer_class = ContactDetailSerializer