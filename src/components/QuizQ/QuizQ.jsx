import React from 'react';
import { useLoaderData } from 'react-router-dom';

import Quistions from '../Questions/Quistions';

const QuizQ = () => {
    const questionLoad = useLoaderData()

    const questionArray = questionLoad.data



  
   
    return (
        <div>
            <div className="">
                
            <Quistions questionArray={questionArray}></Quistions>

            </div>
        </div>
    );
};

export default QuizQ;