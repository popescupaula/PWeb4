import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import HeroImage from "../components/HeroImage";
import Footer from "../components/Footer";
import axios from "axios";
import QuizesCard from "../components/QuizesCard";
import * as ReactBootStrap from 'react-bootstrap';

function Quizes(){
    const [quizes, setQuizes] = useState(null);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        getAllQuizes();
    }, []);
    
   const getAllQuizes = () =>{
        axios.get('https://pure-caverns-82881.herokuapp.com/api/v54/quizzes',
        {headers:{
                    "X-Access-Token": '17f3c9ebbc602c6b9f8b74712d4fc886561dab2c4785864b139fa866d1d52008',
                }
        })
        .then((response) => {
                const allQuizes = response.data;
                setQuizes(allQuizes);         
                setLoading(true);
 
        })
        .catch(error => console.error(`Error: ${error}`));
   }

    return(
        <div>
            <Navbar />
            <HeroImage heading='QUIZZES.' text='Choose your quizz.' />
            {loading ? <QuizesCard {...quizes} /> : <ReactBootStrap.Spinner animation="border"/>}
            <Footer />
        </div>
    );
}
export default Quizes;