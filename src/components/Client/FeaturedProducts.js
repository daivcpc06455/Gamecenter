import React from 'react';

function FeaturedProducts() {
  const products = [
    { id: 1, name: "Tablet", price: "12,000,000₫", image: "featured1.jpg" },
    { id: 2, name: "Smartphone", price: "10,000,000₫", image: "featured2.jpg" },
  ];

  return (
    <div className="product-list">
      {products.map(product => (
        <div className="product" key={product.id}>
          <img src={product.image} alt={product.name} />
          <p>{product.name}</p>
          <span className="price">{product.price}</span>
        </div>
      ))}
    </div>
  );
}

export default FeaturedProducts;
