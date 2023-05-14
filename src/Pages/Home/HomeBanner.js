import React from 'react';
import bannerPhoto from './../../Assets/Images/banner-photo.jpg'
import { Link } from 'react-router-dom';
const HomeBanner = () => {
    return (
        <div className="hero h-80 " style={{ backgroundImage: `url(${bannerPhoto})` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <p className="mb-3 ">#NEW SUMMER COLLECTION 2023</p>
                    <h1 className="mb-5 text-5xl font-bold">ARRIVALS SALES</h1>

                    <Link to='/products'><button className="btn btn-active">Shop Now</button> </Link>

                </div>
            </div>
        </div>
    );
};

export default HomeBanner;