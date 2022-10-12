import React from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import OptionData from '../OptionData/OptionData';

const EachTopicQ = ({questionData,idx}) => {
    
    const {question,options,correctAnswer} = questionData
    const qQuiestion = question.slice(3,-4)
    const tost = (correctAnswer)=>{
   
        toast.success(`Correct answer: ${correctAnswer}`,{autoClose:600})
    }

    const tostAnswer = (correctAnswer,option)=>{
   
        if(correctAnswer===option){
            toast.success("Correct Answer",{autoClose:600})
        }
        else{
            toast.error("Wrong Answer",{autoClose:600})
        }
    }
    return (
        <div>
            <div className=' text-xl  mt-20 text-center bg-gray-100 w-5/6 mx-auto rounded-md p-5'>
            <p className='m-5 text-blue-700 font-bold'> {idx}) {qQuiestion} </p>
            
            <Link onClick={()=>{tost(correctAnswer)}}  to=""><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
</svg>

</Link>
            {
                options.map((option,idx)=><OptionData option={option} tostAnswer={tostAnswer} correctAnswer = {correctAnswer} key={idx}></OptionData>)
            }
            </div>
        </div>
    );
};

export default EachTopicQ;