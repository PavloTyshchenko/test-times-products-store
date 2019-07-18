import React, { useState, useContext } from 'react'

import ProductsContext from '../../context/products/productsContext';

const Search = () => {

    const productsContext = useContext(ProductsContext);

    const [text, setText] = useState('');

    const onChange = (e) => setText(e.target.value);

    const onSubmit = (e) => {
        e.preventDefault();
        if (text !== '') {
            productsContext.searchProducts(text);
            setText('');
        }
    }

    return (
        <div>
            <form className="form"
                onSubmit={onSubmit}>
                <input type="text"
                    name="text"
                    placeholder="Search Products..."
                    value={text}
                    onChange={onChange} />
                <input type="submit"
                    value="Search"
                    className="btn btn-dark btn-block" />
            </form>
            {productsContext.searched.length > 0 &&
                <button className="btn btn-light btn-block"
                onClick={productsContext.clearProducts}>
                    Clear
                </button>
            }
        </div>
    )
}

export default Search;
