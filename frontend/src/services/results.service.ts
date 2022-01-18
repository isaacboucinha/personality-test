import http from "../http-client";

import IAnswer from "../types/answer.type";
import IResult from "../types/result.type";

class ResultService {
  calculate(data: IAnswer[]) {
    return http
      .post<IResult>("/result/calculate/", (data = data))
      .then((data) => data.data);
  }
}

export default new ResultService();
