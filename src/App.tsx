import React, {useEffect, useState} from 'react';
import axios from "axios";
import './App.css';


function App() {
    const [question, setQuestion] = useState();
    const [answer, setAnswer] = useState();

    useEffect(() => {
        fetch('https://opentdb.com/api.php?amount=1')
            .then(response => response.json())
            .then(json => {
                setQuestion(json.results[0].question);
                setAnswer(json.results[0].correct_answer);
            })
            .catch(error => console.error(error));
    }, []);

    return (
        <div>
            <h1>{question}</h1>
            <p>{answer}</p>
        </div>
    );
}

export default App;
