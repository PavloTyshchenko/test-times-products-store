import React, { useContext } from 'react';
import { ListGroup } from 'react-bootstrap';

import ProductsContext from '../../context/products/productsContext';

import './Categories.css';

const Categories = () => {

    const categories = [
        'Home & Kitchen',
        'Sports & Outdoors',
        'Health & Personal Care',
        'Baby Products'
    ];

    const productsContext = useContext(ProductsContext);

    const items = categories.map((item, key) => {

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

    const onItemSelect = (text) => {
        productsContext.searchProductsByCategory(text);
    };

    return (
        <ListGroup as="ul" className="mb-3">
            {items}
        </ListGroup>
    );
};

export default Categories;
