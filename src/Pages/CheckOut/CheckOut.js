import React, { useState } from 'react';
import CheckOutProducts from './CheckOutProducts/CheckOutProducts';
import OrderInfo from './OrderInfo/OrderInfo';
import { useLoaderData } from 'react-router-dom';
import OrderSummary from './OrderSummary/OrderSummary';
import PaymentMethod from './PaymentMethod/PaymentMethod';

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
                <OrderInfo></OrderInfo>
                <PaymentMethod></PaymentMethod>
                <OrderSummary 
                productPrice={totalPrice}
                ></OrderSummary>
            </div>
        </div>
    </div >
    );
};

export default CheckOut;