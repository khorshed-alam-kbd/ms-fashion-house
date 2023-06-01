import React, { useEffect, useState } from 'react';
import CheckOutProducts from './CheckOutProducts/CheckOutProducts';
import OrderInfo from './OrderInfo/OrderInfo';
import { useLoaderData } from 'react-router-dom';
import OrderSummary from './OrderSummary/OrderSummary';
import PaymentMethod from './PaymentMethod/PaymentMethod';

const CheckOut = () => {
    const product = useLoaderData();

    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        setCartItems([...cartItems, product]);
    }, [product]);

    const [totalPrice, setTotalPrice] = useState(0);
    const [deliveryCharge, setDeliveryCharge] = useState(1);

    return (
        <div className="lg:mx-24 my-5 lg:grid grid-cols-3 gap-5">
            <div className="col-span-2 ">
                <div className='m-4'>
                    <CheckOutProducts
                        products={cartItems}
                        calculateTotalPrice={setTotalPrice}
                    ></CheckOutProducts>
                </div>
            </div>
            <div className="">
                <div className='m-4'>
                    <OrderInfo
                        productDeliveryCharge={setDeliveryCharge}

                    ></OrderInfo>
                    <PaymentMethod></PaymentMethod>
                    <OrderSummary
                        productPrice={totalPrice}
                        deliveryCharge={deliveryCharge}
                    ></OrderSummary>
                </div>
            </div>
        </div >
    );
};

export default CheckOut;