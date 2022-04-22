import React, { useState, useEffect } from 'react';
import { Card } from '../components/Card';
import './Product.scss';
import { AuthContext } from '../hooks/AuthContext'

export const Products = () => {
  const { toggle } = React.useContext(AuthContext);
  console.log(toggle);
  const url = '/api/products';
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const resp = await fetch(url, {
      headers: {
        'Authorization': `token ${toggle}`
      }
    });
    const data = await resp.json();
    console.log(data)

    const productsFromBE = data.products.map((resp) => {
      return {
        id: resp.id,
        title: resp.id,
        url: resp.thumbnail,
        price: `${resp.price} ${resp.currency_id}`,
      };
    });
    setProducts(productsFromBE);
  };
  return (
    <>
      <div className='products'>
        <h1>Products</h1>
        <div className='products-card-container'>
          {products.map((elm, index) => (
            <Card
              key={elm.id}
              title={elm.title}
              url={elm.url}
              description={elm.price}
            ></Card>
          ))}
        </div>
      </div>
    </>
  );
};
