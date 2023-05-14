import React from 'react';
import HomeBanner from './HomeBanner';
import ProductsCategories from './ProductsCategories/ProductsCategories';
import PopularProducts from './PopularProducts/PopularProducts';
import MostRatedProducts from './MostRatedProducts/MostRatedProducts';

const Home = () => {
    return (
        <div>
            <HomeBanner></HomeBanner>
            <ProductsCategories></ProductsCategories>
            <PopularProducts></PopularProducts>
            <MostRatedProducts></MostRatedProducts>
        </div>
    );
};

export default Home;