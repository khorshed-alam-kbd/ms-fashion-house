import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const FlashSale = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch("https://fakestoreapi.com/products?limit=8")
            .then(response => response.json())
            .then(data => setProducts(data))
    }, [])


    const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTimeRemaining(calculateTimeRemaining());
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    function calculateTimeRemaining() {
        // Replace the targetDate with your desired end date and time
        const targetDate = new Date('2023-06-05T23:59:59');
        const difference = targetDate - new Date().getTime();
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / (1000 * 60)) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        return {
            days,
            hours,
            minutes,
            seconds,
        };
    }


    console.log(products)
    return (
        <div className='lg:mx-24 my-10'>
            <h1 className="my-7 text-3xl font-semibold"> <span className='font-bold text-5xl text-base-700'>|</span> FLASH SALES </h1>

            <div class="flex gap-5 divider my-10">
                <div>
                    <span class="font-mono text-5xl font-bold">
                        <span>{timeRemaining.days}</span>
                    </span>
                    days
                </div>
                <div>
                    <span class="font-mono text-5xl font-bold">
                        : <span>{timeRemaining.hours}</span>
                    </span>
                    hours
                </div>
                <div>
                    <span class="font-mono text-5xl font-bold">
                        : <span>{timeRemaining.minutes}</span>
                    </span>
                    min
                </div>
                <div>
                    <span class="font-mono text-5xl font-bold">
                        : <span>{timeRemaining.seconds}</span>
                    </span>
                    sec
                </div>
            </div>

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

export default FlashSale;