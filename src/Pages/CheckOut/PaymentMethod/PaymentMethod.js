import React from 'react';
import { Form } from 'react-router-dom';

const PaymentMethod = () => {
    return (
        <div className='mt-5 border rounded p-5 lg:p-10'>

                    <div className="mx-auto mb-5 text-center text-xl font-bold rounded">
                            <p>Please select the payment method</p>
                    </div>

                    <Form className=''>
                            <div className="form-control border rounded my-2 px-1">
                                <label className="label cursor-pointer gap-2">
                                    <input type="radio" name="radio-10" value={60} className="radio checked:bg-green-500" checked />
                                    <span className="label-text font-semibold"> Cash On Delivery </span> 
                                </label>
                            </div>
                            <div className="form-control border rounded my-2 px-1">
                                <label className="label cursor-pointer gap-2">
                                    <input type="radio" name="radio-10" value={120} className="radio checked:bg-green-500" checked />
                                    <span className="label-text font-semibold"> bKash Payment</span> 
                                </label>
                            </div>
                            <div className="form-control border rounded my-2 px-1">
                                <label className="label cursor-pointer gap-2">
                                    <input type="radio" name="radio-10" value={120} className="radio checked:bg-green-500" checked />
                                    <span className="label-text font-semibold"> Others </span> 
                                </label>
                            </div>
                            
                    </Form>
            
        </div>

    );
};

export default PaymentMethod;