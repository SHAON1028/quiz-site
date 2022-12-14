import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../components/ErrorPage";
import Root from "../components/Root";
import Home from "../components/Home/Home";
import { topicsData } from "../Loader/Data";
import Blog from "../components/Blog/Blog";
import Topics from "../components/Topics/Topics";
import Statistics from "../components/Statistics/Statistics";
import QuizQ from "../components/QuizQ/QuizQ";


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
       {
         path: "/topics",
         element:<Topics></Topics>
         
       },
       {
         path: "/statistics",
         element:<Statistics></Statistics>,
       },
       {
         path: 'topic/:id',
         element: <QuizQ></QuizQ>,
         loader: ({ params }) =>
           fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`),
       },
    ]
   }
    
   

])

export default router;