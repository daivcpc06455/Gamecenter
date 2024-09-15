import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// Import các thành phần của Client
import ClientHeader from './Routes/Header';
import ClientSidebar from './Routes/Sidebar';
import ClientDashboard from './Routes/ClientPage';
import ClientProductList from './Routes/ProductList';
import ClientFeaturedProducts from './Routes/FeaturedProducts';

function ClientLayout() {
  return (
    <>
      <ClientHeader />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <ClientSidebar />
          </div>
          <div className="col-md-9">
            <Routes>
              <Route path="dashboard" element={<ClientDashboard />} />
              <Route path="products" element={<ClientProductList />} />
              <Route path="featured" element={<ClientFeaturedProducts />} />
              {/* Route mặc định cho Client */}
              <Route path="*" element={<Navigate to="dashboard" />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
}

export default ClientLayout;
