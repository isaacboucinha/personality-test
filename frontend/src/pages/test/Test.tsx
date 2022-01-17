import "./Test.scss";

import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import QuestionDataService from "../../services/question.service"

import FadeableContainer from "../../components/fadeable-container/FadeableContainer";
import Button from "../../components/button/Button";
import OptionPicker from "../../components/option-picker/OptionPicker";
import { IQuestion } from "../../types/question.type";


function Test() {
  const navigate = useNavigate();

  const [isShowing, setIsShowing] = React.useState(false);
  const [questionIsShowing, setQuestionIsShowing] = React.useState(false);
  const [fadeHasBeenTriggered, setFadeHasBeenTriggered] = React.useState(false);
  const [questionFadeHasBeenTriggered, setQuestionFadeHasBeenTriggered] =
    React.useState(false);

  const [userAnswers, setUserAnswers] = React.useState<string[]>([]);
  const [currentAnswer, setCurrentAnswer] = React.useState("");
  const [questionNumber, setQuestionNumber] = React.useState(0);
  const [questions, setQuestions] = React.useState<Array<IQuestion>>([]);

  const handleButtonClick = () => {
    if (currentAnswer === "") return;
    userAnswers.push(currentAnswer);
    setUserAnswers(userAnswers);

    if (questionNumber === questions.length - 1) {
      setIsShowing(false);
      setFadeHasBeenTriggered(true);
      setTimeout(() => {
        navigate("/result");
      }, 300);
    } else {
      setQuestionFadeHasBeenTriggered(true);
      setQuestionIsShowing(false);
      setTimeout(() => {
        setCurrentAnswer("");
        setQuestionNumber(questionNumber + 1);
        setQuestionFadeHasBeenTriggered(false);
      }, 300);
    }
  };

  const handleOptionPicking = (id: string) => {
    if (id === currentAnswer) {
      setCurrentAnswer("");
    } else {
      setCurrentAnswer(id);
    }
  };

  useEffect(() => {
    setFadeHasBeenTriggered(true)
    setQuestionFadeHasBeenTriggered(true)
    const fetchQuestions = async () => {
      QuestionDataService.getAll().then((res) => {
        setQuestions(res.data.results)
        setFadeHasBeenTriggered(false)
        setQuestionFadeHasBeenTriggered(false)
      })
    };

    fetchQuestions();
  }, []);

  useEffect(() => {
    if (!fadeHasBeenTriggered)
      setTimeout(() => {
        setIsShowing(true);
      }, 200);

    if (!questionFadeHasBeenTriggered)
      setTimeout(() => {
        setQuestionIsShowing(true);
      }, 200);
  });

  return (
    <>
    {
    questions.length !== 0 &&
    <FadeableContainer isShowing={isShowing}>
      <div className="Test-maincontent">
        <h1 className="Test-title">Test</h1>
        <div className="Test-questionmaincontainer">
          <FadeableContainer isShowing={questionIsShowing}>
            <div className="Test-questionmaincontainer">
              <div className="Test-questioncontainer">
                <span className="Test-questiontitle">
                  Question {questionNumber + 1}:{" "}
                </span>
                <span className="Test-questioncontent">
                  {questions[questionNumber].content}
                </span>
              </div>
              <div className="Test-questionoptions">
                <OptionPicker
                  options={questions[questionNumber].answers}
                  onOptionChange={handleOptionPicking}
                  currentlyPickedOption={currentAnswer}
                />
              </div>
              <Button onClick={handleButtonClick} disabled={currentAnswer === ""}>
                Next question
              </Button>
            </div>
          </FadeableContainer>
        </div>
      </div>
    </FadeableContainer>
    }
    </>
  );
}

export default Test;
