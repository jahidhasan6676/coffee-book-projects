// import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Card from "./Card";


const CoffeeCards = () => {
    const {category} = useParams();
    const coffees = useLoaderData();
    // const [coffee, setCoffee] = useState();

    // useEffect(()=>{
    //     const filteredCategory = [...coffees].filter(coffee => coffee.category === category)
    //     if(filteredCategory){
    //         setCoffee(filteredCategory)
    //     }else{
    //         setCoffee('')
    //     }
    // },[category,coffees]);
    // console.log(coffee)
    // console.log(coffees)
    // console.log(category)
    
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
           {
            coffees.map(coffee => <Card key={coffee.id} coffee={coffee}></Card>)
           }
        </div>
    );
};

export default CoffeeCards;