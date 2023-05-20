import React from 'react';
import CheckOutProducts from './CheckOutProducts/CheckOutProducts';
import OrderInfo from './OrderInfo/OrderInfo';
import { useLoaderData } from 'react-router-dom';
import OrderSummary from './OrderSummary/OrderSummary';

const CheckOut = () => {
    const product = useLoaderData();

    // const { title, image, price, category, description, rating } = product;

    return (
        <div className="lg:mx-24 my-5 lg:grid grid-cols-3 gap-5">
        <div className="col-span-2 ">
            <div className='m-4'>
                <CheckOutProducts 
                product={product}
                ></CheckOutProducts>
            </div>
        </div>
        <div className="">
            <div className='m-4'>
                <OrderSummary 
                product={product}
                ></OrderSummary>
                <OrderInfo></OrderInfo>
            </div>
        </div>
    </div >
    );
};

export default CheckOut;