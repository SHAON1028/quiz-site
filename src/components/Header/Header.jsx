import { Navbar } from 'flowbite-react';
import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div className='lg:ml-20 lg:mr-20 '>
      <Navbar
  fluid={true}
  rounded={true}
>
  <NavLink to="/">
<div className='flex'>
<img
      src="https://img.freepik.com/premium-vector/quiz-logo-with-speech-bubble-symbols-concept-questionnaire-show-sing-quiz-button-question-competition-exam-interview-modern-emblem_180786-72.jpg?w=740"
      className="mr-3 h-6 sm:h-9"
      alt="Flowbite Logo"
    />

<span className="self-center whitespace-nowrap text-2xl font-bold  text-rose-500">
      QuizHuntz
    </span>
</div>

  </NavLink>
  <Navbar.Toggle />
  <Navbar.Collapse>
    <NavLink
      to="/home"
      active="true"
    >
    <p className='text-lg'>Home</p>
    </NavLink>
    <NavLink to="/statistics">
    <p className='text-lg'>Statistics</p>
    </NavLink>
    <NavLink to="/topics">
    <p className='text-lg'>Topics</p>
    </NavLink>
    <NavLink to="/blogs">
    <p className='text-lg'>Blogs</p>
    </NavLink>


  </Navbar.Collapse>
</Navbar>
    </div>
  );
};

export default Header;