import React from 'react';
import { Form } from 'react-router-dom';

const ContactUs = () => {
    return (
        <div className='mx-24 my-10'>
            <div className='mx-auto'>
                <iframe className='mx-auto' width="868" height="327" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=868&amp;height=327&amp;hl=en&amp;q=heriken.com%20Dhaka+()&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>


            </div>
            <h1 className='my-7 text-2xl font-bold'>GET IN TOUCH</h1>
            <div className='lg:flex lg:gap-10 lg:justify-between' >
                <div className='w-2/3'>
                    <Form className='border rounded p-5 lg:p-10'>
                        <div>
                            <div className='lg:flex gap-2 w-full lg:justify-between' >
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text">First Name</span>
                                    </label>
                                    <input type="text" placeholder="First Name" className="input input-bordered" />
                                </div>
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text">Last Name</span>
                                    </label>
                                    <input type="text" placeholder="Last Name" className="input input-bordered" />
                                </div>
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email Address</span>
                                </label>
                                <input type="email" placeholder="Email Address" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Subject</span>
                                </label>
                                <input type="text" placeholder="Subject" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Massage</span>
                                </label>
                                <textarea className="textarea textarea-bordered h-24" placeholder="Enter your massage"></textarea>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-outline">Send Massage</button>
                            </div>
                        </div>
                    </Form>

                </div>
                <div className='mt-5 lg:mt-0 w-1/3'>
                    <div className='border p-5 mb-5 rounded'>
                        <h1 className='font-bold'>Dhaka</h1>
                        <p>36 zigatola puran kacha bazar, Dhaka, Bangladesh</p>
                    </div>
                    <div className='border p-5 mb-5 rounded'>
                        <h1 className='font-bold'>Khulna</h1>
                        <p>13 Sonadanga, Khulna, Bangladesh</p>
                    </div>
                    <div className='border p-5 mb-5 rounded'>
                        <h1 className='font-bold'>Sylhet</h1>
                        <p>15 Osmaninogar, Sylhet, Bangladesh</p>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default ContactUs;