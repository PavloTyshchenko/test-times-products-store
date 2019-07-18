import React from 'react';
import PropTypes from 'prop-types';

const ProductItem = ({ product: { img, name, price, currency, link } }) => {

    return (
        <li className="card">
            <a href={link} className="inner">
                <div className="li-img">
                    <img src={img} alt="product" />
                </div>
                <div className="li-text">
                    <h4 className="li-head">{name}</h4>
                    <p className="li-sub">Price: {price} ({currency})</p>
                </div>
            </a>
        </li>
    );
};

ProductItem.propTypes = {
    product: PropTypes.object.isRequired
};

export default ProductItem;
