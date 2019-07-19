import React, { useState, useContext } from 'react';
import { ListGroup, Button } from 'react-bootstrap';

import ProductsContext from '../../context/products/productsContext';

import './Categories.css';

const Categories = () => {

    const categories = [
        'Home & Kitchen',
        'Sports & Outdoors',
        'Health & Personal Care',
        'Baby Products'
    ];

    const items = categories.map((item, key) => {

        return (
            <ListGroup.Item key={key} as="li"
                onClick={() => onItemSelect(item)}>
                {item}
            </ListGroup.Item>
        );
    });

    const productsContext = useContext(ProductsContext);

    const [category, setCategory] = useState('');

    const onItemSelect = (category) => {
        setCategory(category);
        productsContext.searchProductsByCategory(category);
    };


    return (
        <ListGroup as="ul" className="mb-3">
            {items}
            {
                productsContext.showClear &&
                <Button variant="secondary" className="mt-3"
                    onClick={productsContext.clearProducts}>
                    Clear
                </Button>
            }
        </ListGroup>


    )
}


export default Categories;
