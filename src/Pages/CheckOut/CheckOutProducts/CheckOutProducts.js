import React from 'react';

const CheckOutProducts = ({product}) => {

  const { title, image, price, category, description, rating } = product;

  console.log(product);
    return (
        <div>
            <div className="overflow-x-auto w-full">
            <table className="table w-full">

                <thead>
                      <tr>
                          <th>SL</th>
                          <th className=''>Products</th>
                          <th>Price</th>
                          <th>Discount</th>
                          <th>Quantity</th>
                          <th>Total</th>
                          <th>Action</th>
                      </tr>
                </thead>
                <tbody>
                  <tr className='text-center'>
                      <td> 1 </td>
                        <td>
                            <div className="flex items-center gap-2">
                              <div className="avatar">
                                <div className="mask mask-squircle w-12 h-12">
                                  <img src={image} alt="" />
                                </div>
                              </div>
                              <div className="font-bold">{title}</div>
                            </div>
                        </td>
                        <td>
                          <p>${price}</p>
                        </td>
                        <td>$100</td>
                        <td>1</td>
                        <td>${price}-100</td>
                      <th>
                        <button className="btn btn-ghost btn-xs">details</button>
                      </th>
                  </tr> 
                </tbody>
    
            </table>
  
            </div>
        </div>
    );
};

export default CheckOutProducts;