import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { addCardToLs, getCardList } from "../utilities/Utilites";


const CoffeeDetails = () => {
    const { id } = useParams();
    const allData = useLoaderData();

    const [data, setData] = useState([]);
    const [isFavorite,setIsFavorite] = useState(false)
    useEffect(() => {
        const singleData = allData.find((coffee) => coffee.id === parseInt(id));
        setData(singleData)
        const favorite = getCardList();
        if(favorite.includes(singleData.id)){
            setIsFavorite(true)
        }
    }, [allData, id]);

    const { name, image, category, origin, type, rating, popularity } = data;


    // local storage
    const handleFavorite = (id) =>{
        addCardToLs(id)
        setIsFavorite(true)
    }

    return (
        <div className="w-11/12 lg:w-10/12 mx-auto">
            <div className="card card-compact bg-base-100 shadow-xl">
                <div className='transition hover:scale-105 overflow-hidden'>
                    <figure>
                        <img className='h-[300px] w-full rounded-md'
                            src={image}
                            alt="coffee" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Name: {name}</h2>
                        <h5>Category: {category}</h5>
                        <h5>Type: {type}</h5>
                        <h5>Origin: {origin}</h5>
                        <h5>Rating: {rating}</h5>
                        <div className="flex justify-between">
                            <div>
                                <h5>Popular: {popularity}</h5>
                            </div>
                            <div onClick={()=>handleFavorite(data.id)} className="">
                                <button disabled={isFavorite} className="btn btn-warning">Add Favorite</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default CoffeeDetails;