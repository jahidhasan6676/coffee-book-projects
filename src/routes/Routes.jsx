import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Coffee from "../pages/Coffee";
import Dashboard from "../pages/Dashboard";
import ErrorElement from "../pages/ErrorElement";
import CoffeeCards from "../components/CoffeeCards";


const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement:<ErrorElement></ErrorElement>,
      children:[
        {
            path:'/',
            element:<Home></Home>,
            loader:()=> fetch("../category.json"),
            children:[
                {
                    path:"/category/:category",
                    loader:()=> fetch("../coffees.json"),
                    element:<CoffeeCards></CoffeeCards>
                }
            ],
        },
        {
            path:'/coffees',
            element:<Coffee></Coffee>
        },
        {
            path:'/dashboard',
            element:<Dashboard></Dashboard>
        }
      ],
    },
  ]);

export default router;