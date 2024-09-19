import React from 'react';

function ProductList() {
  const products = [
    { name: 'Ghế gỗ phòng ăn', price: '1,500,000đ', image: 'url_to_image_1' },
    { name: 'Đèn lồng ngủ', price: '700,000đ', image: 'url_to_image_2' },
    { name: 'Iphone 12 128GB', price: '25,000,000đ', image: 'url_to_image_3' },
    // Thêm sản phẩm tại đây
  ];

  return (
    <div className="product-list" style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
      {products.map((product, index) => (
        <div className="product-item" key={index} style={{ width: '30%' }}>
          <img src={product.image} alt={product.name} style={{ width: '100%' }} />
          <h4>{product.name}</h4>
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
