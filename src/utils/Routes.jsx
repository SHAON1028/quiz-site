import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../components/ErrorPage";
import Root from "../components/Header/Root";


const router = createBrowserRouter([

   {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
   }
    
   

])

export default router;