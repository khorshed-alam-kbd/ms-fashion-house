import React from 'react';
import { Link } from 'react-router-dom';

const ProductDetailsCard = ({product}) => {
    return (
                <div>
                        <div className="card card-compact shadow-xl duration-500 group-hover:scale-[0.85] hover:!scale-100 cursor-pointer w-72 lg:w-full">
                                
                                <figure><img className='h-48 lg:h-56' src={product.image} alt="" /></figure>
                                <div className="card-body rounded-b-2xl bg-base-300">
                                   <h2 className="card-title">{product.title}</h2>
                                   <p className='truncate hover:text-clip'>{product.description}</p>

                                   <p>Rating: {product.rating.rate}</p>
                                   <p>Rated Person: {product.rating.count}</p>
                                   <p className='font-bold'>Price: ${product.price}</p>
                                   <div className="card-actions justify-end">
                                      <Link to={`/product/${product.id}`}><button className="btn hover:btn-success">Details</button></Link>
                                   </div>
                                </div>
                            
                        </div>
                </div>
    );
};

export default ProductDetailsCard;