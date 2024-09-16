import React from 'react';

function CustomerHeader() {
  return (
    <header className="customer-header" style={{ backgroundColor: '#4CAF50', padding: '10px' }}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h1 style={{ color: '#fff' }}>C2SHOP</h1>
          </div>
          <div className="col-md-6">
            <nav className="nav">
              <a href="/">Trang chủ</a>
              <a href="/products">Sản phẩm</a>
              <a href="/about">Giới thiệu</a>
              <a href="/news">Tin tức</a>
              <a href="/contact">Liên hệ</a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default CustomerHeader;
