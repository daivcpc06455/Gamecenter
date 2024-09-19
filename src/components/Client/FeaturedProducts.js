import React from 'react';

function FeaturedProducts() {
  const featuredProducts = [
    { name: 'Laptop', price: '15,000,000đ', image: 'url_to_image_4' },
    { name: 'Smart Watch', price: '3,500,000đ', image: 'url_to_image_5' },
    // Thêm sản phẩm tại đây
  ];

  return (
    <div className="featured-products" style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
      {featuredProducts.map((product, index) => (
        <div className="product-item" key={index} style={{ flex: '1 1 calc(30% - 20px)', boxSizing: 'border-box' }}>
          <img src={product.image} alt={product.name} style={{ width: '100%' }} />
          <h4>{product.name}</h4>
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  );
}

export default FeaturedProducts;
