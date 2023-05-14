import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const MensCollection = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("https://fakestoreapi.com/products/category/men's%20clothing")
            .then(response => response.json())
            .then(data => setProducts(data))
    }, []);

    return (
        <div className='mx-24 my-5'>
            <h1 className='text-center text-3xl front-bold uppercase my-7'> Men's Collection </h1>

            <div className='mx-auto'>
                <div className='grid lg:grid-cols-3 gap-5 group'>
                    {
                        products.map(product =>
                            <div className="card card-compact shadow-xl duration-500 group-hover:scale-[0.85] hover:!scale-100  cursor-pointer ">
                                <figure><img className='h-56' src={product.image} alt="" /></figure>
                                <div className="card-body card-body rounded-b-2xl bg-base-300">
                                    <h2 className="card-title">{product.title}</h2>
                                    <p className='truncate hover:text-clip'>{product.description}</p>

                                    <p>Rating: {product.rating.rate}</p>
                                    <p>Rated Person: {product.rating.count}</p>
                                    <p className='font-bold'>Price: ${product.price}</p>
                                    <div className="card-actions justify-end">
                                        <Link to={`/product/${product.id}`}><button className="btn">Buy Now</button></Link>
                                    </div>
                                </div>
                            </div>

                        )
                    }
                </div>

            </div>
        </div>
    );
};

export default MensCollection;