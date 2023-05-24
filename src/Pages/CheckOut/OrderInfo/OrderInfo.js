import React from 'react';
import { Form, useForm } from 'react-router-dom';

const OrderInfo = () => {

    const { register, handleSubmit } = useForm();

    const userInfo = data =>{
        const fastName = data.fastName;
        const lastName = data.lastName;
        const phoneNumber = data.number;
        const address = data.address;       
    }
    return (
        <div>    
            <Form className='border rounded p-5 lg:p-10'>
                        <p className='text-center my-2 text-xl font-bold'>
                            To confirm the order please enter name, phone number, address and click order now button
                            </p>
                        <div>
                            <div className='lg:flex gap-2 w-full lg:justify-between' >
                                <div className="form-control w-full ">
                                    <label className="label">
                                        <span className="label-text font-bold">First Name:</span>
                                    </label>
                                    <input type="text" placeholder="First Name" {...register("fastName", { required: true })} className="input input-bordered" />
                                </div>
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text font-bold">Last Name:</span>
                                    </label>
                                    <input type="text" placeholder="Last Name" {...register("lastName", { required: true })} className="input input-bordered" />
                                </div>
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold"> Phone Number:</span>
                                </label>
                                <input type="text" placeholder="Enter Your Phone Number" {...register("number", { required: true })} className="input input-bordered" />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Address:</span>
                                </label>
                                <textarea className="textarea textarea-bordered h-24" placeholder="Enter your address" {...register("address", { required: true })}></textarea>
                            </div>
                            
                        </div>

                        <div className="mx-auto my-5 text-center text-xl font-bold rounded p-2">
                            <p>Please select the Delivery Charge</p>
                        </div>

                        <div className='lg:flex justify-between'>
                            <div className="form-control">
                                <label className="label cursor-pointer gap-2">
                                    <input type="radio" name="radio-10" value={60}  className="radio checked:bg-green-500" checked />
                                    <span className="label-text font-semibold"> Inside Dhaka $ 1.00 </span> 
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label cursor-pointer gap-2">
                                    <input type="radio" name="radio-10" value={120} className="radio checked:bg-green-500" checked />
                                    <span className="label-text font-semibold"> Outside Dhaka $ 3.00</span> 
                                </label>
                            </div>
                            
                        </div>
            </Form>

        </div>
    );
};

export default OrderInfo;