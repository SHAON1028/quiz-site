import React from 'react';
import { Link } from 'react-router-dom';
import Topics from '../Topics/Topics';
import homeImage from '../../img/HeaderImg.jpg'

const Home = () => {
    return (
        <div className='mt-10' >
            
 <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl  text-center">Welcome to QuizHuntz</h1>
<p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400 text-center">Designed for to test your knowledge, This test will allow to assess your knowledge in React, CSS , JavaScript and Git .Topics: React context api, routing, CSS properties and selectors, JavaScript syntax, events and operators,Git version control</p>
<div className='text-center'>
<Link to="/topics">
              <button
                type="button"
                className="px-8 py-3 m-2 text-lg border rounded-full border-cyan-400 bg-purple-700 text-white"
              >
                Choose Topics
              </button>
            </Link>
</div>

<div className=''>
  <img className='mx-auto' src={homeImage} alt="" />
</div>
<h1 className='text-center text-3xl font-bold mt-20'>Topics Here</h1>
<Topics></Topics>
        </div>
    );
};

export default Home;