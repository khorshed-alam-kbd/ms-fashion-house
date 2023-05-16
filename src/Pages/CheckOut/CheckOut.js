import React from 'react';
import CheckOutProducts from './CheckOutProducts/CheckOutProducts';
import OrderInfo from './OrderInfo/OrderInfo';

const CheckOut = () => {
    return (
        <div className="mx-24 my-5 grid grid-cols-2 gap-5">
        <div className="">
            <div className='m-4'>
                <CheckOutProducts></CheckOutProducts>
            </div>
        </div>
        <div className="">
        <div className='m-4'>
            <OrderInfo></OrderInfo>
        </div>
        </div>
    </div >
    );
};

export default CheckOut;