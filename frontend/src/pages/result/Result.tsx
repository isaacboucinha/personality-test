import "./Result.scss";

import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import IResult from "../../types/result.type";

import FadeableContainer from "../../components/fadeable-container/FadeableContainer";
import Button from "../../components/button/Button";

function Result() {
  const navigate = useNavigate();
  const [isShowing, setIsShowing] = React.useState<boolean>(false);
  const [fadeHasBeenTriggered, setFadeHasBeenTriggered] =
    React.useState<boolean>(false);
  const [username, setUsername] = React.useState<string | null>(null);
  const [result, setResult] = React.useState<IResult | null>(null);

  const routeChange = () => {
    localStorage.clear();

    setIsShowing(false);
    setFadeHasBeenTriggered(true);
    setTimeout(() => {
      navigate("/");
    }, 300);
  };

  useEffect(() => {
    const username: string | null = localStorage.getItem("username");
    const result: IResult = JSON.parse(localStorage.getItem("result") || "");

    setUsername(username);
    setResult(result);
  }, []);

  useEffect(() => {
    if (!fadeHasBeenTriggered)
      setTimeout(() => {
        setIsShowing(true);
      }, 200);
  });

  return (
    <FadeableContainer isShowing={isShowing}>
      <div className="Result-maincontent">
        <h1 className="Result-intro">Ok, the results are in!</h1>
        <div className="Result-regrettablesummary">
          <h2 className="Result-obnoxiousintroduction">
            {username}, according to our super-duper metrics and analysis, your
            personality type is:
          </h2>
          <h2 className="Result-personalitytype">
            {result?.personality_class}
          </h2>
          <h2 className="Result-confusingexplanation">{result?.description}</h2>
        </div>
        <Button onClick={routeChange} disabled={false}>
          Go back to the start
        </Button>
      </div>
    </FadeableContainer>
  );
}

export default Result;
