
import { createBrowserRouter } from 'react-router-dom';
import Home from '../../Pages/Home/Home';
import Main from '../../Layout/Main/Main';
import ProductsDetails from '../../Pages/Home/ProductsDetails/ProductsDetails';
import Shop from '../../Pages/Shop/Shop';
import ShopLayout from '../../Layout/ShopLayout/ShopLayout'
import MensCollection from '../../Pages/Shop/MensCollection/MensCollection';
import JewelryCollection from '../../Pages/Shop/JewelryCollection/JewelryCollection';
import WomensCollection from '../../Pages/Shop/WomensCollection/WomensCollection';
import ContactUs from '../../Pages/ContactUs/ContactUs';
import AboutUs from '../../Pages/AboutUs/AboutUs';
import Product from '../../Pages/Product/Product';
import CheckOut from '../../Pages/CheckOut/CheckOut';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/category/:type',
                element: <ProductsDetails></ProductsDetails>,
                loader: ({ params }) => fetch(`https://fakestoreapi.com/products/category/${params.type}`)
            },
            {
                path: '/product/:id',
                element: <Product></Product>,
                loader: ({ params }) => fetch(`https://fakestoreapi.com/products/${params.id}`)
            },
            {
                path: '/checkout',
                element: <CheckOut></CheckOut>
            },
            {
                path: '/contactUs',
                element: <ContactUs></ContactUs>
            },
            {
                path: '/aboutUs',
                element: <AboutUs></AboutUs>
            },
        ]
    },
    {
        path: "/products",
        element: <ShopLayout></ShopLayout>,
        children: [
            {
                path: '/products',
                element: <Shop></Shop>
            },
            {
                path: '/products/mensCollection',
                element: <MensCollection></MensCollection>
            },
            {
                path: '/products/jewelry',
                element: <JewelryCollection></JewelryCollection>
            },
            {
                path: '/products/womensCollection',
                element: <WomensCollection></WomensCollection>
            }
        ]
    }

]);
export default router;