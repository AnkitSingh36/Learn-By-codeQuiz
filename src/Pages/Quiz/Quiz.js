import { Button, CircularProgress } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router';
import Question from '../../components/Question/Question';

function Quiz({ score, setScore, questions, setQuestions }) {
    const [newQuestions, setNewQuestions] = useState();
    const history = useHistory();

    useEffect(() => {
        if (questions.length < 1) {
            questions = JSON.parse(localStorage.getItem("newQuestions"));
        }
        if (questions) {
            setNewQuestions(questions);
        } else {
            setNewQuestions([]);
        }
    }, [questions]);

    const handleSubmit = () => {
        questions.forEach(ele => {
            if (ele.answers[ele.correct_answer] === ele.chooseAns) {
                    setScore(score = score + 1);
            }
        });
        setQuestions([]);
        localStorage.removeItem('newQuestions');
        history.push('/result');
    }
   
    return (
        <div className="quiz">
            {newQuestions ? (
            <>
                <div className="quizInfo">
                    <span>{questions.category}</span>
                    </div>
                    {newQuestions.map((currQues, index) => (
                        <Question
                            id={index + 1}
                            key={currQues.id}
                            currQues={currQues.question}
                            questions={currQues}
                            setQuestions={setQuestions}
                            allQuestion={newQuestions}
                        />
                    ))}
                    {questions.length > 0 ? (<div>
                            < Button variant='contained' size='large' color='secondary' onClick={handleSubmit}>Result</Button>
                        </div>
                    ) : (
                        <div className = "lmContainer">
                                <h1 className ="lastMessage">Sorry !, Taking time or Still need to Update </h1>
                        </div>
                            )}
            </>
            ) : (<CircularProgress
                style={{ margin: 100 }}
                color="inherit"
                size={150}
                thickness={1} />
            )}
        </div>
    )
}

export default Quiz;