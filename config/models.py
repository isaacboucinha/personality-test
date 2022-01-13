import uuid

from django.contrib.auth.models import AbstractUser
from django.db import models

# TODO load thrasio_service_core from artifactory
# from thrasio_service_core.django.models import TimestampedModel


class TimestampedModel(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)

    created_on = models.DateTimeField(auto_now_add=True)
    updated_on = models.DateTimeField(auto_now=True)

    def update(self, update_dict=None, **kwargs):
        """Helper method to update objects"""
        if not update_dict:
            update_dict = kwargs
        update_fields = {"updated_on"}
        for k, v in update_dict.items():
            setattr(self, k, v)
            update_fields.add(k)
        self.save(update_fields=update_fields)

    class Meta:
        abstract = True


class ActiveTimestampedModel(TimestampedModel):
    active = models.BooleanField(default=True)

    class Meta(TimestampedModel.Meta):
        abstract = True


class User(AbstractUser, TimestampedModel):
    email = None  # disable the AbstractUser.email field
    username = models.TextField(max_length=64)

    def __str__(self):
        return self.username
