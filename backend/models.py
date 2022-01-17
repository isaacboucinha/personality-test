from django.db import models

from config.models import TimestampedModel, ActiveTimestampedModel


class Question(ActiveTimestampedModel):
    content = models.TextField(max_length=256, blank=False)

    def __str__(self):
        return "%s" % (self.content)


class Answer(ActiveTimestampedModel):
    content = models.TextField(max_length=256, blank=False)
    question = models.ForeignKey(Question, on_delete=models.CASCADE)
    personality_level = models.IntegerField(blank=False)

    def __str__(self):
        return "%s" % (self.content)


class Result(TimestampedModel):
    description = models.TextField(max_length=512, blank=False)
    personality_class = models.TextField(max_length=64, blank=False)
    value = models.IntegerField(blank=False, unique=True)

    def __str__(self):
        return "%s" % (self.description)
