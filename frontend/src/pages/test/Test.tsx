
import "./Test.scss"

import React, { useEffect } from "react"
import { useNavigate } from "react-router-dom";

import FadeableContainer from "../../components/fadeable-container/FadeableContainer";
import Button from "../../components/button/Button";
import OptionPicker from "../../components/option-picker/OptionPicker";

const mockQuestions = [
    {
        "question": "A friend calls you after a long, exhausting day at work. He wants to go out to grab a beer.\
                     More oftenly, you will:",
        "answers": [
            {id: 1, "text": "Refuse. The daily grind is too much, man! Time for some Netflix and chill under the blankets." },
            {id: 2, "text": "Accept. It feels good to have a beer with friends after work, to unwind." },
            {id: 3, "text": "Consider it. You commonly reserve such plans for a Friday night, but a beer is always just a beer. Right?" },
        ]
    },
    {
        "question": "Weekend time! All the week's work is done; what are you doing with your free time?\
                     Most likely, you will:",
        "answers": [
            {id: 1, "text": "Get some fresh air and meet some friends one day, and use the other to just re-energize and relax at home." },
            {id: 2, "text": "Go out! You have a plan with friends or family, or maybe something you want to do by yourself." },
            {id: 3, "text": "Stay home, enjoying some well-deserved R&R or focusing on some of your favorite hobbies" },
        ]
    },
    {
        "question": "A bunch of people just appeared in your house! What's happening?",
        "answers": [
            {id: 1, "text": "I have a dinner party planned, what else?" },
            {id: 2, "text": "I have no ideia, it's scream-and-panic o'clock just about now." }, 
            {id: 3, "text": "Don't know, but I guess it's time to open the bubbly?" },
        ]
    },
    {
        "question": "There's a big family/friend reunion in the works for a special occasion, and people are waiting for your response.\
                     What's your response?",
        "answers": [
            {id: 1, "text": "I'll wait and see how enthusiastic I am when the day comes." },
            {id: 2, "text": "I dunno man, I haven't talked with these people in forever, might be weird, y'know?" },
            {id: 3, "text": "Let's go! No better time to be with friends/family than for a celebration!" },
        ]
    },
    {
        "question": "A friend of yours is late for the plan you had set up, in the local restaurant. Most likely, you will:",
        "answers": [
            {id: 1, "text": "Pull out that phone, baby! Read some articles or watch some youtube." },
            {id: 2, "text": "Strike a conversation with some random strangers." },
            {id: 3, "text": "Lock yourself in the bathroom, and not come out until your friend arrives." },
        ]
    },
]

function Test()  {
    const navigate = useNavigate();

    const [isShowing, setIsShowing] = React.useState(false);
    const [questionIsShowing, setQuestionIsShowing] = React.useState(false);
    const [fadeHasBeenTriggered, setFadeHasBeenTriggered] = React.useState(false);
    const [questionFadeHasBeenTriggered, setQuestionFadeHasBeenTriggered] = React.useState(false);

    const [userAnswers, setUserAnswers] = React.useState<number[]>([]);
    const [currentAnswer, setCurrentAnswer] = React.useState(-1);
    const [questionNumber, setQuestionNumber] = React.useState(0);

    const questions = mockQuestions;


    const handleButtonClick = () => {
        if(currentAnswer === -1) return
        userAnswers.push(currentAnswer)
        setUserAnswers(userAnswers)

        if(questionNumber === questions.length - 1) {
            setIsShowing(false)
            setFadeHasBeenTriggered(true)
            setTimeout(() => {
                navigate("/result")
            }, 300);
        } else {
            setQuestionFadeHasBeenTriggered(true)
            setQuestionIsShowing(false)
            setTimeout(() => {
                setCurrentAnswer(-1)
                setQuestionNumber(questionNumber + 1)
                setQuestionFadeHasBeenTriggered(false)
            }, 300);
        }
    }

    const handleOptionPicking = (id: number) => {
        if(id === currentAnswer) {
            setCurrentAnswer(-1)
        } else {
            setCurrentAnswer(id)
        }
    }

    useEffect(() => {
        if(!fadeHasBeenTriggered)
            setTimeout(() => {
                setIsShowing(true)
            }, 200);

        if(!questionFadeHasBeenTriggered)
            setTimeout(() => {
                setQuestionIsShowing(true)
            }, 200);
    });

    return (
        <div className="Test-maincontent">
            <FadeableContainer isShowing={isShowing}>
                <h1 className="Test-title">Test</h1>
                <div className="Test-questionmaincontainer">
                    <FadeableContainer isShowing={questionIsShowing}>
                        <div className="Test-questioncontainer">
                            <span className="Test-questiontitle">Question {questionNumber + 1}: </span>
                            <span className="Test-questioncontent">
                                {questions[questionNumber].question}
                            </span>
                        </div>
                        <div className="Test-questionoptions">
                            <OptionPicker 
                                options={questions[questionNumber].answers}
                                onOptionChange={handleOptionPicking}
                                currentlyPickedOption={currentAnswer}
                            />
                        </div>
                        <Button onClick={handleButtonClick} disabled={currentAnswer === -1}>
                            Next question
                        </Button>
                    </FadeableContainer>
                </div>
            </FadeableContainer>
        </div>
    )
}

export default Test