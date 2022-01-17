import IAnswer from "./answer.type";

export interface IQuestion {
  id?: string | null;
  content: string;
  answers: IAnswer[];
}

export interface IQuestionData {
  results: IQuestion[];
}
