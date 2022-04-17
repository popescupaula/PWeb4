import React from 'react';
import HeroImage from './HeroImage';
import Footer from './Footer';
import './QuizStartStyles.css';

const QuizStart = ({ onQuizStart }) => {
  return(
    <div>
        <HeroImage heading='Start the quiz NOW!' text='Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium'/>
        <div className="container"> 
          <button className="buttonPlay" onClick={onQuizStart}>Let's PLAY the quiz!</button>
        </div> 
        <Footer />
    </div>
  );
}

export default QuizStart;