import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const PopularProducts = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch("https://fakestoreapi.com/products?limit=6")
            .then(response => response.json())
            .then(data => setProducts(data))
    }, [])


    console.log(products)
    return (
        <div className='lg:mx-24 my-10'>
            <h1 className="my-7 text-3xl font-semibold"> <span className='font-bold text-5xl text-base-700'>|</span> POPULAR PRODUCTS </h1>

            <div className="mx-24 grid lg:grid-cols-3 gap-7 group">
                {
                    products.map(product =>
                        <div className="card card-compact shadow-xl duration-500 group-hover:scale-[0.85] hover:!scale-100  cursor-pointer ">
                            <figure className='h-48'><img src={product.image} alt="" /></figure>
                            <div className="card-body card-body rounded-b-2xl bg-base-300">
                                <h2 className="card-title">{product.title}</h2>
                                <p className='font-bold'>$ {product.price}</p>
                                <div className="card-actions justify-end">
                                    <Link to={`/product/${product.id}`}><button className="btn btn-sm hover:btn-success ">Details</button></Link>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>

        </div >
    );
};

export default PopularProducts;