import React, { useState } from 'react';
import CheckOutProducts from './CheckOutProducts/CheckOutProducts';
import OrderInfo from './OrderInfo/OrderInfo';
import { useLoaderData } from 'react-router-dom';
import OrderSummary from './OrderSummary/OrderSummary';

const CheckOut = () => {
    const product = useLoaderData();

    const [totalPrice, setTotalPrice] = useState(0);

    const calculateTotalPrice =(price)=>{

        setTotalPrice= price;
    }


    return (
        <div className="lg:mx-24 my-5 lg:grid grid-cols-3 gap-5">
        <div className="col-span-2 ">
            <div className='m-4'>
                <CheckOutProducts 
                product={product}
                calculateTotalPrice ={setTotalPrice}
                ></CheckOutProducts>
            </div>
        </div>
        <div className="">
            <div className='m-4'>
                <OrderSummary 
                productPrice={totalPrice}
                ></OrderSummary>
                <OrderInfo></OrderInfo>
            </div>
        </div>
    </div >
    );
};

export default CheckOut;