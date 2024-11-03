import { useEffect, useState } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import Card from "./Card";


const CoffeeCards = () => {
    const {category} = useParams();
    const coffees = useLoaderData();
    const [coffee, setCoffee] = useState([]);
    const navigate = useNavigate();

    useEffect(()=>{
        
        if(category){
            const filteredCategory = [...coffees].filter(coffee => coffee.category === category)
            setCoffee(filteredCategory)
        }else{
            setCoffee(coffees.slice(0, 6))
        }
    },[category,coffees]);
    // console.log(coffee)
    // console.log(coffees)
    // console.log(category)
    
    return (
        <div className="w-11/12 lg:w-10/12 mx-auto mt-10">
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-5">
            {
                coffee.map(coffee => <Card key={coffee.id} coffee={coffee}></Card>)
            }
           
        </div>
        <button onClick={()=> navigate('/coffees')} className="btn btn-warning">View all</button>
        </div>
    );
};

export default CoffeeCards;