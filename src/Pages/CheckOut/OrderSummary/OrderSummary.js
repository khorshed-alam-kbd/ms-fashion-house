import React from 'react';

const OrderSummary = ({product}) => {

    const { price } = product;

    let totalPrice = ( price + 20 ).toFixed(3);
    return (
        <div className='border rounded p-5 lg:p-10 mb-4'>
            <p className='text-center uppercase text-xl font-bold mb-4'>
              Order Summary
            </p>
            <div className='font-semibold my-2 flex justify-between '>
                <p > Product Price </p>
                <p > ${price}</p>
            </div>
            <div className='font-semibold my-2 flex justify-between '>
                <p > Delivery Charge </p>
                <p > $ 20 </p>
            </div>
            
            <div className="divider"></div>
            
            <div className='font-bold flex justify-between '>
                <p className=''> Total Price </p>
                <p > $ {totalPrice} </p>
            </div>
            
        </div>
    );
};

export default OrderSummary;