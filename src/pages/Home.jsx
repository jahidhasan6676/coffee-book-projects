import { Outlet, useLoaderData } from "react-router-dom";
import Categories from "../components/Categories";
import Banner from "../layouts/Banner";
import Heading from "../layouts/Heading";



const Home = () => {
    const category = useLoaderData();
    return (
        <div>
            <Banner></Banner>
            <Heading title={'Browse Coffees by Category'} subtitle={'Choose your desired coffee category to browse through specific coffees that fit in your taste.'}></Heading>

            <Categories category={category}></Categories>

            <Outlet></Outlet>
        </div>
    );
};

export default Home;