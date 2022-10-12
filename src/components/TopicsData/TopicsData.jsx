import { Button, Card } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';

const TopicsData = ({topic}) => {
    const {id,name,logo,total} = topic
    return (
        <div>
            <div className="max-w-sm ">
  <Card   >
    <img className='bg-gray-200 rounded' src={logo} alt="" />
    <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
    {name}
    <div><small className='text-red-600'>Total Quiz: {total
    }</small></div>
    </h5>
 <Link to={`../topic/${id}`}>
 <Button
    color="purple"
    pill={true}
  >
    Start Quiz
  </Button>
 </Link>
    <p className="font-normal text-gray-700 dark:text-gray-400">
    
    </p>
  </Card>
</div>
        </div>
    );
};

export default TopicsData;