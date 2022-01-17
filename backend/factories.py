import factory
from .models import Question, Answer, Result


class QuestionFactory(factory.django.DjangoModelFactory):
    class Meta:
        model = Question


class AnswerFactory(factory.django.DjangoModelFactory):
    class Meta:
        model = Answer


class ResultFactory(factory.django.DjangoModelFactory):
    class Meta:
        model = Result
