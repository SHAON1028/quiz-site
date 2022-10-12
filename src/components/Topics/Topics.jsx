
import React, { useContext } from 'react';
import { TopicContext } from '../Root';
import TopicsData from '../TopicsData/TopicsData';

const Topics = () => {
    const loaderData = useContext(TopicContext)
    const  dataStats = loaderData.topics
    const topicData = dataStats.data
  
    return (
<div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
      <div className='grid gap-8 row-gap-5 mb-8 lg:grid-cols-3 lg:row-gap-8'>
        {
            topicData.map(topic=><TopicsData key={topic.id} topic={topic}></TopicsData>)
            
        }
      </div>
    </div>
    );
};

export default Topics;