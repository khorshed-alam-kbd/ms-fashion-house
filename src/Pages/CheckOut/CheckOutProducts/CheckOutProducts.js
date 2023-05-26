import React, { useState } from 'react';

const CheckOutProducts = ({products, calculateTotalPrice}) => {

  // const { title, image, price, category, description, rating } = product;
  const [price, setPrice] = useState(1);

  const [quantity, setQuantity] = useState(1);
  const [total, setTotal] = useState(price);

  calculateTotalPrice(total); 

  const handleQuantityChange = (event) => {
    const newQuantity = parseInt(event.target.value);
    setQuantity(newQuantity);
    calculateTotal(newQuantity, price);
    calculateTotalPrice(total); 
  };

  const calculateTotal = (quantity, price) => {
    const newTotal = quantity * price;
    setTotal(newTotal.toFixed(2));
  };

  console.log(products);

    return (
        <div>
            <div className="overflow-x-auto w-full">
            <table className="table w-full">

                <thead>
                      <tr className='text-center'>
                          <th>SL</th>
                          <th>Products</th>
                          <th>Price</th>
                          <th>Discount</th>
                          <th>Quantity</th>
                          <th>Total</th>
                          <th>Action</th>
                      </tr>
                </thead>
                <tbody>

                  {
                    products.map((product, index)=>(
                      <tr className='text-center' key={index}>
                      <td> {index + 1} </td>
                        <td>
                            <div className="flex items-center gap-2">
                              <div className="avatar">
                                <div className="mask mask-squircle w-12 h-12">
                                  <img src={product.image} alt="" />
                                </div>
                              </div>
                              <div className="font-bold">{product.title}</div>
                            </div>
                        </td>
                        <td>
                          <p>${product.price}</p>
                        </td>
                        <td>$00</td>

                        <td><input type="number" value={quantity} onChange={handleQuantityChange} className='border rounded text-center'/></td>
                        
                        <td>${product.price * quantity}</td>
                      <th>
                        <button className="btn btn-error btn-xs">Delete</button>
                      </th>
                  </tr> 
                    ))
                  }
                </tbody>
            </table>
            </div>
        </div>
      
    );
};

export default CheckOutProducts;