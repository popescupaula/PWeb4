import React from "react";
import { useNavigate } from "react-router-dom";
import Quiz from "./Quiz";
import './QuizesCardStyles.css'

function QuizesCard(props){
    let entries = Object.entries(props);
    console.table(entries);

    let navigate = useNavigate();
    
    function responds(id) {
        console.log(id)
        let idx = id + '';
        let path = '/quizes/'+ idx
        navigate(path);
        <Quiz id={id}/>
    }
    return(
        <div className="container">
            <div className="back-card">
                <div className="card-container">
                    {entries.map(quiz => 
                    <div className="quizCard"  key={quiz[1].id} 
                                                    onClick = {() =>
                                                        responds(quiz[1].id)
                                                    }
                                                    >
                        <h1 className="quizName">{quiz[1].title}</h1>
                        <p>__________</p>
                        <p>Questions: {quiz[1].questions_count}</p>
                    
                    </div>)}
                </div>
            </div>
        </div>
    );
}
export default QuizesCard;
