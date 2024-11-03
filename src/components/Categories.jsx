import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types'

const Categories = ({category}) => {
    
    return (
        <div role="tablist" className="tabs tabs-lifted mt-10">
                {
                    category.map(category =>
                         <NavLink

                          key={category.id} to={`/category/${category.category}`} role="tab" className={({isActive})=> `tab ${isActive? 'tab-active' : ''}` }>{category.category}

                         </NavLink>)
                }
                
            </div>
    );
};

Categories.propTypes ={
    category:PropTypes.array
}

export default Categories;