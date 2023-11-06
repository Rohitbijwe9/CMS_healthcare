from django.contrib import admin
from .models import User #ContactDetails,ServiceProvider



class UserAdmin(admin.ModelAdmin):
     list_display=['first_name','last_name','username','password','user_type','user_code','user_image','is_active','created_on','updated_on']
admin.site.register(User,UserAdmin)
#admin.site.register(ContactDetails)
#admin.site.register(ServiceProvider)