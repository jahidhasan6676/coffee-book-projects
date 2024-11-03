import { useEffect, useState } from "react";
import Heading from "../layouts/Heading";
import { getCardList, removeLs } from "../utilities/Utilites";
import Card from "../components/Card";



const Dashboard = () => {
  
    
    const [coffees,setCoffees] = useState([]);
    useEffect(()=>{
        const storedList = getCardList();
        setCoffees(storedList)
    },[]);

    const handleRemove = () =>{
        removeLs();
        const storedList = getCardList();
        setCoffees(storedList)
    }
    return (
        <div className="w-11/12 lg:w-10/12 mx-auto
        ">
            <Heading title={'Welcome to Dashboard'} subtitle={'Manage coffees that you have previously added as favorite. You can view or remove them from here.'}></Heading>

            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-5">
            {
                coffees.map(coffee => <Card handleRemove={handleRemove} key={coffee.id} coffee={coffee}></Card>)
            }
           
        </div>
        </div>
    );
};

export default Dashboard;