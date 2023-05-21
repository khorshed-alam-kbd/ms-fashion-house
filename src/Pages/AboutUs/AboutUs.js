import React from 'react';
import img from '../../Assets/Images/aboutBg.jpg'
import img2 from '../../Assets/Images/aboutBg2.jpg'

const AboutUs = () => {
    return (
        <div className='mx-5 lg:mx-24 my-10'>
            <div >
                <h1 className="my-7 text-3xl font-semibold text-center"> OUR STORY</h1>
                <div className='lg:flex gap-3 lg:justify-between items-center border rounded'>
                    <img className='mx-auto' src={img} alt="" />
                    <p className='text-center text-justify p-5'> Ka Fashion regarded as one of the most influential and enigmatic fashion designers of modern times. It has transformed a small house business into one of the most impressive multi-billion dollar fashion houses. Ka Fashion is a true iconoclast and someone who has never ducked a challenge.</p>


                </div>
            </div>
            <div >
                <h1 className="my-7 text-3xl font-semibold text-center">OUR JOURNEY</h1>
                <div className='lg:flex gap-3 lg:justify-between items-center border rounded'>
                    <p className='text-center text-justify p-5'> The Ka Fashion renaissance started under KA in 2013 with unassuming fabric for her bags. KA chose function over fashion. The brand’s nylon bags eventually became a symbol of modernity, allowing luxury to be subversive and beyond the superficial.</p>

                    <img className='mx-auto' src={img2} alt="" />
                </div>
            </div>

        </div>
    );
};

export default AboutUs;