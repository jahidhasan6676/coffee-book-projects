import PropTypes from 'prop-types'
import { Link, useLocation } from 'react-router-dom';

const Card = ({ coffee,handleRemove }) => {
    const {pathname} = useLocation();
   
    const { name, image, category, origin, type, id, rating, popularity } = coffee || {};
    return (
        <div className="card card-compact bg-base-100 shadow-xl relative">
            <Link to={`/details/${id}`} className='transition hover:scale-105 overflow-hidden'>
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
                <h5>Popular: {popularity}</h5>
            </div>
            </Link>
           
           {
            pathname === '/dashboard' && (<div onClick={handleRemove} className='absolute -top-5 -right-0 bg-warning cursor-pointer rounded-full'>remove</div>)
           }
        </div>
    );
};

Card.propTypes = {
    coffee: PropTypes.object.isRequired
}
export default Card;