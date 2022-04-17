import React, {useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import './AddQuizStyles.css';
import Footer from "../components/Footer";

function AddQuiz () {
    const [formFields, setFormFields] = useState([{question:'',answers:[],correct_answer:''},])
    const [title, setTitle] = useState('');
    const [submission, setSubmission] = useState({data:{}})
    const [error, setError] = useState('')
    const navigate = useNavigate();
    
    const handleFormChange = (event, index) => {
        let data = [...formFields];
        console.log("data", event.target.name)
        if (event.target.name === ('answers[0]')){
            data[index]['answers'][0] = event.target.value
        }
        else if (event.target.name === ('answers[1]')){
            data[index]['answers'][1] = event.target.value        
        }
        else if (event.target.name === ('answers[2]')){
            data[index]['answers'][2] = event.target.value        
        }
        else if (event.target.name === ('answers[3]')){
            data[index]['answers'][3] = event.target.value        
        }else
        data[index][event.target.name] = event.target.value;
        setFormFields(data);
      }
    
      const submit = (e) => {
          e.preventDefault();
          console.log(formFields)
          setSubmission(submission.data = {title, "questions":formFields})
          console.log(submission);

          axios.post('https://pure-caverns-82881.herokuapp.com/api/v54/quizzes', submission,  
          {headers:{
                          "X-Access-Token": '17f3c9ebbc602c6b9f8b74712d4fc886561dab2c4785864b139fa866d1d52008',
                      }
                  })
          .then((res) => {
              navigate("/quizes")
          })
          .catch((err)=>{
              console.log(err)            
          })
      
    }
    
  
      const addFields = () => {
        let object = {
          question: '',
          answers: [],
          correct_answer: ''
        }
    
        setFormFields([...formFields, object])
      }

      const removeFields = (index) => {
        let data = [...formFields];
        data.splice(index, 1)
        setFormFields(data)
      }
    
    return (
        <div>
          <Navbar/>
          <br/><br/><br/><br/>
            <div className="Form">
                <div className="card">
                    <div className="card-body">
                        <h1 className="card-title">Create a Quiz</h1>
                        <form onSubmit={submit}>
                            <label htmlFor="title" className="form-label">Title</label> <br/>
                            <input type="text"  className="form-control" name="title" value={title} onChange={(e)=>setTitle(e.target.value)}/>
                            <br/>
                            { 
                            formFields.map((form, index) => {
                                return(
                                    <div key={index}>
                                        <label htmlFor="title" className="form-label">Question</label> 
                                        <input type="text"  className="form-control" name="question" onChange={event=>handleFormChange(event, index)} value={form.question}/> <br/>

                                        <label htmlFor="answer[0]" className="form-label">Answer 1</label> 
                                        <input type="text" className="form-control" name="answers[0]" onChange={event=>handleFormChange(event, index)} value={form.answers[0]}/> <br/>

                                        <label htmlFor="answer[1]" className="form-label">Answer 2</label>         
                                        <input type="text" className="form-control" name="answers[1]" onChange={event=>handleFormChange(event, index)} value={form.answers[1]}/> <br/>

                                        <label htmlFor="answer[2]" className="form-label">Answer 3</label>         
                                        <input type="text" className="form-control" name="answers[2]" onChange={event=>handleFormChange(event, index)} value={form.answers[2]}/> <br/>

                                        <label htmlFor="answer[3]" className="form-label">Answer 4</label> <br/>        
                                        <input type="text" className="form-control" name="answers[3]" onChange={event=>handleFormChange(event, index)} value={form.answers[3]}/> <br/>
                                         
                                        <label htmlFor="correct_answer" className="form-label">Select the correct answer:</label> <br/>        
                                        <select name="correct_answer" className="form-control" value={form.correct_answer} onChange={event=>handleFormChange(event, index)}>
                                            <option defaultValue value={form.answers[0]}>{form.answers[0]}</option>
                                            <option value={form.answers[1]}>{form.answers[1]}</option>
                                            <option value={form.answers[2]}>{form.answers[2]}</option>
                                            <option value={form.answers[3]}>{form.answers[3]}</option>
                                        </select>
                                        <br/>
                                        {error && <div className="text-danger">{error}</div>}
                                        <br/>
                                        <button className="buttonRemove" onClick={() => removeFields(index)}>Remove One Question </button>
                                    </div>
                                )
                            })
                            }
                        </form>
                        
                            <button className="buttonAdd" onClick={addFields}>Add One More Question</button> <br/>
                            <button className="buttonSubmit" onClick={submit}>Submit Quiz</button>
                        
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );


}

export default AddQuiz;