import { useState } from 'react';
import './Question.css';

const Question = ({ currQues, questions, id, setQuestions, allQuestion }) => {
    const [reportAnswer, setReportAnswer] = useState();

    const handleAnswerChange = (e) => {
        setReportAnswer(e.target.value);
        questions.chooseAns = e.target.value;
        allQuestion[id - 1] = questions;
        setQuestions(allQuestion);
        localStorage.setItem("newQuestions", JSON.stringify(allQuestion));
    }

    return (
        <div className="container mt-5">
            <div className="d-flex justify-content-center row">
                <div className="col-md-10 col-lg-10">
                    <div className="border">
                        <div className="question bg-white p-3 border-bottom">
                            <div className="d-flex flex-row align-items-center question-title">
                                <h3 className="text-danger">Q.{ id }</h3>
                                <h5 className="mt-1 ml-2">{currQues}?</h5>
                            </div>
                            <fieldset>
                                <div className="ans ml-2">
                                    {questions.answers["answer_a"] ? <label className="radio"> <input type="radio" name={id} value={questions.answers["answer_a"]} checked={questions.chooseAns === questions.answers["answer_a"]} onChange={handleAnswerChange} /> <span>{questions.answers["answer_a"]}</span></label> : null}
                                </div>
                                <div className="ans ml-2">
                                    {questions.answers["answer_b"] ? <label className="radio"> <input type="radio" name={id}  value={questions.answers["answer_b"]} checked={questions.chooseAns === questions.answers["answer_b"]} onChange={handleAnswerChange} /> <span>{questions.answers["answer_b"]}</span></label> : null}
                                </div>
                                <div className="ans ml-2">
                                    {questions.answers["answer_c"] ? <label className="radio"> <input type="radio" name={id} value={questions.answers["answer_c"]} checked={questions.chooseAns === questions.answers["answer_c"]} onChange={handleAnswerChange} /> <span>{questions.answers["answer_c"]}</span></label> : null}
                                </div>
                                <div className="ans ml-2">
                                    {questions.answers["answer_d"] ? <label className="radio"> <input type="radio" name={id} value={questions.answers["answer_d"]} checked={questions.chooseAns === questions.answers["answer_d"]} onChange={handleAnswerChange} /> <span>{questions.answers["answer_d"]}</span></label> : null}
                                </div>
                            </fieldset>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Question;