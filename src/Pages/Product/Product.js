import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Product = () => {
    const product = useLoaderData();

    const { title, image, price, category, description, rating } = product;
    console.log(product)
    return (
        <div className='lg:mx-24 my-10'>
            <div className='lg:flex gap-3 lg:justify-between'>
                <div className='border rounded p-5 w-1/2'>
                    <img className='mx-auto' src={image} alt="" />
                </div>

                <div className='border rounded w-1/2 p-10'>
                    <h1 className='text-3xl font-bold my-5'>{title}</h1>
                    <p className='text-xl capitalize my-3'> <span className=' font-semibold '>Product Category</span>: {category}</p>
                    <p className=' my-3'> <span className='text-xl font-semibold'>Product Description:</span> <br /> {description} </p>

                    <p className='text-xl font-semibold my-5'>Ratings: {rating.rate}</p>
                    <p className='text-xl font-semibold my-5'>Rated People: {rating.count}</p>

                    <p className='text-2xl font-semibold my-5'>Price: $ {price}</p>
                    <div className='lg:flex lg:justify-between my-5'>
                        <button className="btn w-1/3 mr-2">Add to cart</button>
                        <button className="btn w-1/3 ml-2">Buy Now</button>
                    </div>
                    <button className="btn btn-outline w-full">ADD TO WISH</button>
                </div>
            </div>
        </div>
    );
};

export default Product;