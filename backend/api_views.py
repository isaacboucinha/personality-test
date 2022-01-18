from rest_framework import viewsets
from rest_framework.views import APIView
from rest_framework.response import Response


from .models import Question, Answer, Result
from .serializers import QuestionSerializer, AnswerSerializer, ResultSerializer


class QuestionViewSet(viewsets.ModelViewSet):
    queryset = Question.objects.all()
    serializer_class = QuestionSerializer


class AnswerViewSet(viewsets.ModelViewSet):
    queryset = Answer.objects.all()
    serializer_class = AnswerSerializer


class ResultViewSet(viewsets.ModelViewSet):
    queryset = Result.objects.all()
    serializer_class = ResultSerializer


class ResultCalculateView(APIView):
    queryset = Result.objects.all()
    serializer_class = ResultSerializer
    permission_classes = []

    def post(self, request):
        answer_ids = map(lambda obj: obj["id"], request.data)
        answers = Answer.objects.filter(id__in=answer_ids)
        sum = 0
        for answer in answers:
            sum += answer.personality_level

        result = Result.objects.get(value=sum)
        data = ResultSerializer(result).data

        return Response(data)
