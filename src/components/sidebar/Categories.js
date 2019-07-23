import React, { useContext } from 'react';
import { withRouter } from 'react-router-dom';
import { ListGroup } from 'react-bootstrap';

import ProductsContext from '../../context/products/productsContext';

import './Categories.css';

const Categories = ({ history }) => {

    const productsContext = useContext(ProductsContext);

    const items = productsContext.categories.map((item, key) => {

        return (
            <ListGroup.Item
                active={item === productsContext.category}
                key={key}
                as="li"
                onClick={() => onItemSelect(item)}>
                {item}
            </ListGroup.Item>
        );
    });

    const onItemSelect = (category) => {
        if (productsContext.search_term){
            history.push(`/products/${category}/${productsContext.search_term}`);
        } else {
            history.push(`/products/${category}`);
        }
            
        productsContext.searchProducts(category, undefined);
    };

    return (
        <ListGroup as="ul" className="mb-3">
            {items}
        </ListGroup>
    );
};

export default withRouter(Categories);
