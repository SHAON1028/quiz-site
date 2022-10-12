
import { createContext } from "react";
import { Outlet, useLoaderData } from "react-router-dom";

import Header from "./Header";

export const TopicContext = createContext([])
const Root = () => {

const data = useLoaderData()
// const dataOne = data.data
  

  return (


        
<TopicContext.Provider value={data}>
<Header></Header>
        <Outlet></Outlet>
</TopicContext.Provider>
     


  );
};

export default Root;
