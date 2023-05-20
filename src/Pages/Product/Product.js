import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Product = () => {
    const product = useLoaderData();

    const { title, image, price, category, description, rating } = product;
    console.log(product)
    return (
        <div className='mx-5 lg:mx-24 my-10'>
            <div className='lg:flex lg:justify-between gap-3'>

                <div className='mx-auto border rounded p-5 lg:w-1/2'>
                    <img className='mx-auto lg:h-96' src={image} alt="" />
                </div>

                <div className=' mx-auto border rounded lg:w-1/2 p-10'>
                    <h1 className='text-3xl font-bold my-5'>{title}</h1>
                    <p className='text-xl capitalize my-3'> <span className=' font-semibold '>Product Category</span>: {category}</p>
                    <p className=' my-3'> <span className='text-xl font-semibold'>Product Description:</span> <br /> {description} </p>

                    <p className='text-xl font-semibold my-5'>Ratings: {rating.rate}</p>
                    <p className='text-xl font-semibold my-5'>Rated People: {rating.count}</p>

                    <p className='text-2xl font-semibold my-5'>Price: $ {price}</p>

                    <div className='lg:flex lg:justify-between my-5 '>
                        <Link className="w-1/3" to={``}><button className="w-full btn hover:btn-success my-2">Add to cart</button></Link>

                        <Link className="w-1/3" to={`/checkout/${product.id}`}><button className="w-full btn hover:btn-success my-2">Buy Now</button></Link>
                        
                    </div>

                    <button className="btn btn-outline w-full">ADD TO WISH</button>
                </div>
            </div>
        </div>
    );
};

export default Product;