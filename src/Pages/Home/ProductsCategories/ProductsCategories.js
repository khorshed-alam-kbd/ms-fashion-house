import mensBg from '../../../Assets/Images/mensBg.jpg'
import JewBg from '../../../Assets/Images/jewBG.jpeg'
import WomansBg from '../../../Assets/Images/womenBg.jpg'
import { Link, useNavigate } from 'react-router-dom';

const ProductsCategories = () => {
    const navigate = useNavigate();
    const navigateToMen = () => {
        navigate("/category/men's%20clothing");
    };
    const navigateToJewellery = () => {
        navigate("/category/jewelery");
    };
    const navigateToWomen = () => {
        navigate("/category/women's%20clothing");
    };

    return (
        <div className='lg:mx-24 my-10'>
            <h1 className="my-7 text-3xl font-semibold">
                DISCOVER <br />
                THE COLLECTIONS</h1>

            <div className="lg:grid grid-rows-2 grid-flow-col gap-4 group">
                <div className=" hero row-span-2 col-span-2 duration-500 group-hover:scale-[0.85] hover:!scale-100 cursor-pointer" onClick={navigateToMen} style={{ backgroundImage: `url(${mensBg})` }} >

                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="">
                            <p className="mb-2 ">#NEW SUMMER COLLECTION 2023</p>
                            <h1 className="mb-3 text-3xl font-bold ">MEN'S COLLECTION</h1>
                            <Link to="/category/men's%20clothing" ><button className="btn">Shop Now</button></Link>
                        </div>
                    </div>
                </div>
                <div className="hero duration-500 group-hover:scale-[0.85] hover:!scale-100 cursor-pointer bg-center" onClick={navigateToJewellery} style={{ backgroundImage: `url(${JewBg})` }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="">
                            <p className="mb-2 ">#NEW SUMMER COLLECTION 2023</p>
                            <h1 className="mb-3 text-3xl font-bold ">JEWELRY COLLECTION</h1>
                            <Link to="/category/jewelery" ><button className="btn btn-sm">Shop Now</button></Link>
                        </div>
                    </div>
                </div>
                <div className="hero duration-500 group-hover:scale-[0.85] hover:!scale-100 cursor-pointer " onClick={navigateToWomen} style={{ backgroundImage: `url(${WomansBg})` }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="">
                            <p className="mb-2 ">#NEW SUMMER COLLECTION 2023</p>
                            <h1 className="mb-3 text-3xl font-bold ">WOMEN'S COLLECTION</h1>
                            <Link to="/category/women's%20clothing" ><button className="btn btn-sm">Shop Now</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default ProductsCategories;