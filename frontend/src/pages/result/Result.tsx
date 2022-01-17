import "./Result.scss";

import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import FadeableContainer from "../../components/fadeable-container/FadeableContainer";
import Button from "../../components/button/Button";

function Result() {
  const navigate = useNavigate();
  const [isShowing, setIsShowing] = React.useState(false);
  const [fadeHasBeenTriggered, setFadeHasBeenTriggered] = React.useState(false);

  const routeChange = () => {
    setIsShowing(false);
    setFadeHasBeenTriggered(true);
    setTimeout(() => {
      navigate("/");
    }, 300);
  };

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
            According to our super-duper metrics and analysis, your personality
            type is:
          </h2>
          <h2 className="Result-personalitytype">100% Introvert</h2>
          <h2 className="Result-confusingexplanation">
            You're the kind of person that might just get a heart attack from
            interacting with other people. Social avoidance and peaceful
            contemplative moments are your bread and butter, and you rarely
            leave those confort zones of yours. However, that often allows you
            to focus more on your personal goals and hobbies, and your journey
            of interior self-discovery holds many rewards, as long as you're not
            afraid to pursue it. You go!
          </h2>
        </div>
        <Button onClick={routeChange} disabled={false}>
          Go back to the start
        </Button>
      </div>
    </FadeableContainer>
  );
}

export default Result;
