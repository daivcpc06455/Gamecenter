import React from 'react';

function ProductList() {
  const products = [
    { id: 1, name: "Ghế gỗ phòng ăn", price: "15,700,000₫", image: "product1.jpg" },
    { id: 2, name: "Đèn lồng ngủ", price: "15,700,000₫", image: "product2.jpg" },
    { id: 3, name: "Iphone đỏ 128GB", price: "15,700,000₫", image: "product3.jpg" }
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

export default ProductList;
