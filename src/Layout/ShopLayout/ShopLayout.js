import React from 'react';
import Header from '../../Pages/Shared/Header/Header';
import Footer from '../../Pages/Shared/Footer/Footer';
import { Link, Outlet } from 'react-router-dom';

const Products = () => {
    return (
        <div>
            <Header></Header>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <label htmlFor="dashboard-drawer" tabIndex={0} className="btn btn-ghost lg:hidden flex justify-end">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <Outlet></Outlet>

                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-1/2 lg:w-72 bg-base-300 text-base-content font-semibold ">
                        <li className='border rounded-lg border-black mb-3 '><Link to='/products/mensCollection'>Men's Collection</Link></li>
                        <li className='border rounded-lg border-black mb-3' ><Link to='/products/jewelry'>Jewelry Collection</Link></li>
                        <li className='border rounded-lg border-black mb-3'><Link to='/products/womensCollection'>Women's Collection</Link></li>
                    </ul>

                </div>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default Products;