import { useLoaderData } from "react-router-dom";
import Card from "../components/Card";

const Coffee = () => {
    const allCoffee = useLoaderData();
    return (
       
        <div className="w-11/12 lg:w-10/12 mx-auto ">
            <div className="flex justify-between items-center mb-5">
                <div>
                    <h2 className="font-bold text-xl">Sort coffee &apos;s by Popularity & Rating-&gt;</h2>
                    </div>
                <div className="flex flex-col md:flex-row gap-3">
                    <button className="btn btn-warning">By Popularity</button>
                    <button className="btn btn-warning">By Rating</button>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-5">
        {
            allCoffee.map(coffee => <Card key={coffee.id} coffee={coffee}></Card>)
        }
       
            </div>
        </div>
    );
};

export default Coffee;