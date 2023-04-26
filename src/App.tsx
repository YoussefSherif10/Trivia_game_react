import React, {useEffect, useState} from 'react';
import axios from "axios";
import './App.css';
import Question from "./components/Question";
import Choices from "./components/Choices";


function App() {
    const [question, setQuestion] = useState();
    const [correctAnswer, setCorrectAnswer] = useState();
    const [incorrectAnswers, setIncorrectAnswers] = useState([]);

    useEffect(() => {
        fetch('https://opentdb.com/api.php?amount=1')
            .then(response => response.json())
            .then(json => {
                setQuestion(json.results[0].question);
                setCorrectAnswer(json.results[0].correct_answer);
                setIncorrectAnswers(json.results[0].incorrect_answers);
            })
            .catch(error => console.error(error));
    }, []);

    return (
        <div className="d-flex flex-wrap flex-column align-items-center mt-3 p-2">
            <Question question={question} />
            {incorrectAnswers.length > 1 && <Choices answers={[...incorrectAnswers, correctAnswer]}/>}

        </div>
    );
}

export default App;
