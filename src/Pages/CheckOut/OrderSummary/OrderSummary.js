import React from 'react';

const OrderSummary = ({productPrice, deliveryCharge}) => {

    let totalPrice = ( productPrice + parseInt(deliveryCharge) );
    return (
        <div className='border rounded p-5 lg:p-10 mt-4'>
            <p className='text-center uppercase text-xl font-bold mb-4'>
              Order Summary
            </p>
            <div className='font-semibold my-2 flex justify-between '>
                <p > Product Price </p>
                <p > ${productPrice}</p>
            </div>
            <div className='font-semibold my-2 flex justify-between '>
                <p > Delivery Charge </p>
                <p > $ {deliveryCharge} </p>
            </div>
            
            <div className="divider"></div>
            
            <div className='font-bold flex justify-between '>
                <p className=''> Total Price </p>
                <p > $ {totalPrice} </p>
            </div>
            
            <div className="form-control mt-6">
                <button className="btn">Order Now</button>
            </div>
        </div>
    );
};

export default OrderSummary;