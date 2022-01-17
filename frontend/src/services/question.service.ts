import http from "../http-client";
import { IQuestionData } from "../types/question.type";

class QuestionDataService {
  getAll() {
    return http.get<IQuestionData>("/questions/");
  }
}

export default new QuestionDataService();
