import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../components/ErrorPage";
import Root from "../components/Root";
import Home from "../components/Home/Home";
import { topicsData } from "../Loader/Data";
import Blog from "../components/Blog/Blog";


const router = createBrowserRouter([

   {
    path: "/",
    element: <Root></Root>,
    loader: topicsData,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
         path: "/home",
         element:<Home></Home>
         
       },
       {
         path: "/",
         element:<Home></Home>
         
       },
       {
         path: "/blogs",
         element:<Blog></Blog>
         
       },
    ]
   }
    
   

])

export default router;