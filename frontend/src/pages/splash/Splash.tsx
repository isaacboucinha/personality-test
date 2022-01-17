import "./Splash.scss";

import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import FadeableContainer from "../../components/fadeable-container/FadeableContainer";
import Button from "../../components/button/Button";

function Splash() {
  const navigate = useNavigate();
  const [isShowing, setIsShowing] = React.useState(false);
  const [fadeHasBeenTriggered, setFadeHasBeenTriggered] = React.useState(false);
  const [username, setUsername] = React.useState("");

  const routeChange = () => {
    setIsShowing(false);
    setFadeHasBeenTriggered(true);
    setTimeout(() => {
      navigate("/test");
    }, 300);
  };

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  useEffect(() => {
    if (!fadeHasBeenTriggered)
      setTimeout(() => {
        setIsShowing(true);
      }, 200);
  });

  return (
    <FadeableContainer isShowing={isShowing}>
      <div className="Splash-maincontent">
        <h1 className="Splash-welcome">Welcome!</h1>
        <div className="Splash-regrettablesummary">
          <h2 className="Splash-obnoxiousintroduction">
            Have you ever wondered what kind of personality you have? If it's
            more on the introvert, or maybe on the extrovert, side of things?
            Have you ever had a sudden desire to let a completely random test on
            the internet tell you just that?
          </h2>
          <h2 className="Splash-insecurechallenge">
            Then go ahead and complete this tried-and-true,
            100%-trustworthy-and-scientific, totally-not-made-up personality
            test, and find out what stuff you're made of!
            Ehrm...personality-wise, I mean.
          </h2>
        </div>
        <div className="Splash-nameinputmaincontainer">
          <span className="Splash-namerequest">
            To start, please tell me your name (believe me, this is absolutely
            relevant) and press the button below:
          </span>
          <div className="Splash-nameinputsubcontainer">
            <input
              className="Splash-nameinput"
              placeholder="Your name here"
              type="text"
              value={username}
              onChange={handleUsernameChange}
            />
          </div>
        </div>
        <Button onClick={routeChange} disabled={username === ""}>
          Let's go!
        </Button>
      </div>
    </FadeableContainer>
  );
}

export default Splash;
