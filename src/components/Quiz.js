import React, {useState, useEffect} from "react";
import axios from "axios";
import Navbar from "./Navbar";
import Respond from "./Respond";
import QuizStart from "./QuizStart";
import Feedback from "./Feedback";
import { useParams } from "react-router-dom";

let interval; 

const Quiz = () => {
    const [step, setStep] = useState(1);
    const [activeQuestion, setActiveQuestion] = useState(0);
    const [answers, setAnswers] = useState([]);
    const [time, setTime] = useState(0);
      
    const [questions, setQuestions] = useState([])

    useEffect(() => {
        if(step === 3) {
            clearInterval(interval);
          }
        getAllQuizes();
    }, [step]);
    const superId = useParams()

   const getAllQuizes = async () =>{
        await axios.get('https://pure-caverns-82881.herokuapp.com/api/v54/quizzes/'+superId.id,
        {
            headers:{
                    "X-Access-Token": '17f3c9ebbc602c6b9f8b74712d4fc886561dab2c4785864b139fa866d1d52008',
                }
        })
        .then((response) => {
            const myQuiz = response.data;
            setQuestions(myQuiz.questions); 
            console.log(questions) 
        })
        .catch(error => console.error(`Error: ${error}`));
    }

   const quizStartHandler = () => {
    setStep(2);
    interval = setInterval(() => {
        setTime(prevTime => prevTime + 1);
      }, 1000);
  }

return(
    <div>
        <Navbar/>
        <div className="Quiz">

        {step === 1 && <QuizStart onQuizStart = {quizStartHandler}/>}
        
        {step === 2 && <Respond
        data={questions[activeQuestion]}
        onAnswerUpdate={setAnswers}
        numberOfQuestions={questions.length}
        activeQuestion={activeQuestion}
        onSetActiveQuestion={setActiveQuestion}
        onSetStep={setStep}
        />
        }
        {
            step === 3 && 
            <Feedback
            results = {answers}
            data = {questions}
            time = {time}
            />
        }
        </div>
        </div>
)
}
export default Quiz;
