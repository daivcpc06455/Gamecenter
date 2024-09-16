import React from 'react';
import Header from './Header';  // Sửa đúng đường dẫn đến Header
import Sidebar from './Sidebar';  // Sửa đúng đường dẫn đến Sidebar
import ProductList from './ProductList';  // Sửa đúng đường dẫn đến ProductList
import FeaturedProducts from './FeaturedProducts';


function ClientLayout() {
  return (
    <>
      <Header />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <Sidebar />
          </div>
          <div className="col-md-9">
            {/* Banner quảng cáo */}
            <div className="banner">
              <img src="banner_image_url" alt="Siêu thị đồ gia dụng" style={{ width: '100%', marginBottom: '20px' }} />
            </div>

            {/* Sản phẩm mới */}
            <h2>Sản phẩm mới</h2>
            <ProductList />

            {/* Sản phẩm nổi bật */}
            <h2>Sản phẩm nổi bật</h2>
            <FeaturedProducts />
          </div>
        </div>
      </div>
    </>
  );
}

export default ClientLayout;
