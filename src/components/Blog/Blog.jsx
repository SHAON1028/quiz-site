import { Accordion } from 'flowbite-react';
import React from 'react';

const Blog = () => {
    return (

       <div>
        <h1 className='text-center text-4xl font-bold m-10'>Welcome to Blogs</h1>
             <Accordion alwaysOpen={true}>
        <Accordion.Panel>
          <Accordion.Title>
          What is the purpose of React Router?
          </Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 dark:text-gray-400">
            React Router is a standard library system built on top of the React and used to create routing in the React application using React Router Package. It provides the synchronous URL on the browser with data that will be displayed on the web page. It maintains the standard structure and behavior of the application and mainly used for developing single page web applications.React Router plays an important role to display multiple views in a single page application. Without React Router, it is not possible to display multiple views in React applications. Most of the social media websites like Facebook, Instagram uses React Router for rendering multiple views.
            </p>

          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>
        How does Context API work?
          </Accordion.Title>
          <Accordion.Content>
            <p className="mb-2  dark:text-gray-400">
            The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.React.createContext() is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state
            </p>

          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>
          What is React useRef Hook?
          </Accordion.Title>
          <Accordion.Content>
            <p className="mb-2  dark:text-gray-400">
            The useRef Hook allows you to persist values between renders.It can be used to store a mutable value that does not cause a re-render when updated.It can be used to access a DOM element directly.If we tried to count how many times our application renders using the useState Hook, we would be caught in an infinite loop since this Hook itself causes a re-render.To avoid this, we can use the useRef Hook.The useRef Hook can also be used to keep track of previous state values.This is because we are able to persist useRef values between renders.
            </p>


          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>
       </div>
       
    );
};

export default Blog;