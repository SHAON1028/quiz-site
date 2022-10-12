import React from 'react';
import EachTopicQ from '../EachTopicQ/EachTopicQ';

const Quistions = ({questionArray}) => {
    const {name,questions} = questionArray
   

    return (
        <div>
            <h1 className='text-3xl font-bold text-center mt-20 text-rose-500'>Quiz Of {name}</h1>
            {
                questions.map((questionData,idx)=><EachTopicQ questionData={questionData} key={questionData.id} idx={idx+1}></EachTopicQ>)
            }
        </div>
    );
};

export default Quistions;