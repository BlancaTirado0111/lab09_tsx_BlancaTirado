import React, { useState, useEffect } from 'react';
import './DataFetch.css';

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  brand: string;
}

export const DataFetch: React.FC = () => {
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    const id = Math.floor(Math.random() * 100) + 1;
    const fetchData = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        const data: Product = await response.json();
        setProduct(data);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();
  }, []);

  if (!product) return <div>Cargando...</div>;

  return (
    <div className="card">
      <p>{product.title}</p>
      <p>Description: {product.description}</p>
      <p>USD$: {product.price}</p>
      <p>Brand: {product.brand}</p>
    </div>
  );
};
