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
          <Banner />
          <h2>Sản phẩm mới</h2>
          <ProductList />
          <h2>Sản phẩm nổi bật</h2>
          <FeaturedProducts />
        </div>
      </div>
    </div>
  );
}

export default ClientPage;
