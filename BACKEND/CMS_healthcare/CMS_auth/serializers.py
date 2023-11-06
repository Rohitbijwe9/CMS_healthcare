from rest_framework import serializers
from .models import User #ContactDetails,ServiceProvider


#class ServiceProviderSerializer(serializers.ModelSerializer):
 #   class Meta:
  #      model = ServiceProvider
   #     fields = ('service_provider_name','service_provider_code')
        
    
#class ContactDetailSerializer(serializers.ModelSerializer):
    #service_provider = ServiceProviderSerializer()

 #   class Meta:
  #      model = ContactDetails
   #     fields = '__all__'

class RegisterModelSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = User
        fields = ('id','first_name','last_name','username','password','email','user_type','user_code','user_image','is_active','created_on','updated_on' )
       
    def create(self, validated_data):
        return User.objects.create_user(**validated_data)

class LoginSerializer(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField()
    
        
class UserSerializer(serializers.ModelSerializer):
    password=serializers.CharField(write_only=True)
    #confirm_password=serializers.CharField(write_only=True)
   # contact_details=ContactDetailSerializer()
    #service_provider=ServiceProviderSerializer()
    
    
    class Meta:
        model=User
        fields=('id','first_name','last_name','username','password','user_type','user_code','user_image','is_active','created_on','updated_on')
        
    def create(self,validated_data):
        #contact_details=validated_data.pop('contact_details')
        #contact=ContactDetails.objects.create(**contact_details)
        password=validated_data.pop('password')
        #validated_data.pop('confirm_password')
        obj=User(**validated_data)
        obj.set_password(password)
      # obj.contact_details=contact
        obj.save()
        return obj
    
  