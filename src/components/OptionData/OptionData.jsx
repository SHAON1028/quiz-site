import React from 'react';

const OptionData = ({option,tostAnswer,correctAnswer}) => {

    return (
        <div>
            

<ul className="w-3/6  text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white mx-auto  mb-2">
    <li className="w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600">
        <div className="flex items-center pl-3">
            <input onClick={()=>{tostAnswer(correctAnswer,option)}} id="list-radio-license" type="radio" value="" name="list-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
            <label htmlFor="list-radio-license" className="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">{option}</label>
        </div>
    </li>
</ul>

        </div>
    );
};

export default OptionData;