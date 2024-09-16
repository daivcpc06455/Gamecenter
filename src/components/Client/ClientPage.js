import './Css/Styles1.css';
import React from 'react';


import Banner from './Banner';

import ClientPage from './ClientPage';


function ClientPage() {
  return (
    <div className="client-page">
      <Header />
      <div className="main-content">
        <Sidebar />
        <div className="content">
          <Banner /> {/* Banner quảng cáo */}
          <h2>Sản phẩm mới</h2>
          <ProductList /> {/* Sản phẩm mới */}
          <h2>Sản phẩm nổi bật</h2>
          <FeaturedProducts /> {/* Sản phẩm nổi bật */}
        </div>
      </div>
    </div>
  );
}

export default ClientPage;
