import { Link } from "react-router-dom";
import PropTypes from 'prop-types'

const Categories = ({category}) => {
    
    return (
        <div role="tablist" className="tabs tabs-lifted mt-10">
                {
                    category.map(category => <Link key={category.id} to={`/category/${category.category}`} role="tab" className="tab">{category.category}</Link>)
                }
                
            </div>
    );
};

Categories.propTypes ={
    category:PropTypes.array
}

export default Categories;