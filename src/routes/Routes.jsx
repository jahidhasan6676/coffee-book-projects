import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Coffee from "../pages/Coffee";
import Dashboard from "../pages/Dashboard";
import ErrorElement from "../pages/ErrorElement";
import CoffeeCards from "../components/CoffeeCards";
import CoffeeDetails from "../pages/CoffeeDetails";


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
                    path:"/",
                    loader:()=> fetch("../coffees.json"),
                    element:<CoffeeCards></CoffeeCards>
                },
                {
                    path:"/category/:category",
                    loader:()=> fetch("../coffees.json"),
                    element:<CoffeeCards></CoffeeCards>
                },
            ],
        },
        {
            path:'/allcoffees',
            loader:()=> fetch("../coffees.json"),
            element:<Coffee></Coffee>
        },
        {
            path:'/dashboard',
            element:<Dashboard></Dashboard>
        },
        {
            path:'/details/:id',
            loader:()=> fetch("../coffees.json"),
            element:<CoffeeDetails></CoffeeDetails>
        }
      ],
    },
  ]);

export default router;