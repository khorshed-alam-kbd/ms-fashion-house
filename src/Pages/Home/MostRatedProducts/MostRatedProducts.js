import React, { useEffect, useState } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from 'react-router-dom';

const MostRatedProducts = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch("https://fakestoreapi.com/products?limit=8")
            .then(response => response.json())
            .then(data => setProducts(data))
    }, []);

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    console.log(products)
    return (
        <div className='lg:mx-24 my-10'>
            <h1 className="mt-10 mb-7 text-3xl font-semibold"> <span className='font-bold text-5xl text-base-700'>|</span> MOST RATED PRODUCTS </h1>

            <Carousel responsive={responsive}
                infinite={true}
                autoPlaySpeed={100}
                showDots={true}
            >
                {
                    products.map(product =>
                        <div className="m-5 card card-compact h-96  shadow-xl ">
                            <figure className='h-48'><img src={product.image} alt="" /></figure>
                            <div className="card-body rounded-b-2xl bg-base-300">
                                <h2 className="card-title"> {product.title}</h2>
                                <p className='font-bold'>$ {product.price}</p>
                                <p className='font-semibold'>Rating: {product.rating.rate}</p>
                                <div className="card-actions justify-end">
                                    <Link to={`/product/${product.id}`}><button className="btn btn-xs hover:btn-success ">Buy Now</button></Link>
                                </div>
                            </div>
                        </div>
                    )
                }
            </Carousel>
        </div >
    );
};

export default MostRatedProducts;