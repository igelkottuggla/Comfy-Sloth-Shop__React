import React from 'react';
import { useFilterContext } from '../context/filter_context';
import { useProductsContext } from '../context/products_context';
import Loading from './Loading';

import GridView from './GridView';
import ListView from './ListView';

const ProductList = () => {
    const { filtered_products: products, grid_view } = useFilterContext();
    const { products_loading: loading } = useProductsContext();

    if (loading) return <Loading />;
    else if (products.length < 1) {
        return (
            <h5 style={{ textTransform: 'none' }}>
                Sorry, no products matched your search
            </h5>
        );
    } else if (grid_view === false) {
        return <ListView products={products} />;
    }
    return <GridView products={products}></GridView>;
};

export default ProductList;
