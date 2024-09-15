import './Css/Styles1.css';
import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Banner from './Banner';
import ProductList from './ProductList';
import FeaturedProducts from './FeaturedProducts';

function ClientPage() {
  return (
    <div className="client-page">
      <Header />
      <div className="main-content">
        <Sidebar />
        <div className="content">
          <Banner /> {/* Đảm bảo Banner đã được export đúng cách */}
          <h2>Sản phẩm mới</h2>
          <ProductList /> {/* Đảm bảo ProductList đã được export đúng cách */}
          <h2>Sản phẩm nổi bật</h2>
          <FeaturedProducts /> {/* Đảm bảo FeaturedProducts đã được export đúng cách */}
        </div>
      </div>
    </div>
  );
}

export default ClientPage;
