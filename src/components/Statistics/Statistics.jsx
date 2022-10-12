import React, { useContext } from 'react';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { TopicContext } from '../Root';

const Statistics = () => {
    const loaderData = useContext(TopicContext)
  const  dataStats = loaderData.topics
  const topicData = dataStats.data
  

        return (
        <div className='mt-20'>
        <ResponsiveContainer  width="100%" height={500}>
        <LineChart

          data={topicData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="total" stroke="#82ca9d" />
        </LineChart>    
        </ResponsiveContainer>     
        
 
        </div>
    );
};

export default Statistics;