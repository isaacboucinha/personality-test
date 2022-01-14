from django.contrib.auth.models import AbstractUser
from django.db import models

from config.models import ActiveTimestampedModel


class Question(ActiveTimestampedModel):
    content = models.TextField(length=256, blank=False)

    def __str__(self):
        return "%s" % (self.content)


class Answer(ActiveTimestampedModel):
    content = models.TextField(length=256, blank=False)
    question = models.ForeignKey(Question)

    def __str__(self):
        return "%s" % (self.content)


class User(AbstractUser, ActiveTimestampedModel):
    email = None  # disable the AbstractUser.email field
    username = models.TextField(max_length=64)

    def __str__(self):
        return self.username
