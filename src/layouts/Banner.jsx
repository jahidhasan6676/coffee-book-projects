
import bannerImg from '../assets/banner.jpg'
const Banner = () => {
    return (
        <div className="hero  w-11/12 lg:w-10/12 mx-auto">
            <img className='rounded-md h-[600px] w-full' src={bannerImg}/>
        </div>
    );
};

export default Banner;