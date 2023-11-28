from django.apps import AppConfig


class CmsAuthConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'CMS_auth'

    # def ready(self):
    #     import CMS_auth.signals
