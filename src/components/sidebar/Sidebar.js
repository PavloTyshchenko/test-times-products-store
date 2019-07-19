import React, { useContext } from 'react'
import { Button, ListGroup } from 'react-bootstrap';

import ProductsContext from '../../context/products/productsContext';

import Search from './Search';
import Categories from './Categories';

const Sidebar = () => {
    
    const productsContext = useContext(ProductsContext);

    return (
        <ListGroup>
            <Search />
            <Categories />
            {
                 productsContext.showClear &&
                <Button 
                    variant="light"
                    className="mb-3"
                    onClick={productsContext.clearProducts}>
                    Clear
                </Button>
            }
        </ListGroup>
    );
};

export default Sidebar;
