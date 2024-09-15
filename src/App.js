import React from 'react';
import './components/Client/Css/Styles1.css'; 
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Import các thành phần của Admin
import Header from './components/Admin/Header';
import Sidebar from './components/Admin/Sidebar';
import Dashboard from './components/Admin/Dashboard';
import Rooms from './components/Admin/Rooms';
import RoomDetail from './components/Admin/RoomDetail';
import RoomSummary from './components/Admin/RoomSummary';
import Services from './components/Admin/Services';
import Settings from './components/Admin/Settings';
import Revenue from './components/Admin/Revenue';
import User from './components/Admin/User';

// Import các thành phần của Client
import ClientHeader from './components/Client/Header';
import ClientSidebar from './components/Client/Sidebar';
import ClientDashboard from './components/Client/ClientPage';
import ClientProductList from './components/Client/ProductList';
import ClientFeaturedProducts from './components/Client/FeaturedProducts';
function App() {
  return (
    <Router>
      <Routes>
        {/* Trang Admin */} 
        <Route
          path="/admin/*"
          element={
            <div>
              <Header />
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-3">
                    <Sidebar />
                  </div>
                  <div className="col-md-9">
                    <Routes>
                      <Route path="dashboard" element={<Dashboard />} />
                      <Route path="rooms" element={<Rooms />} />
                      <Route path="rooms/:roomId" element={<RoomDetail />} />
                      <Route path="rooms/summary/:roomId" element={<RoomSummary />} />
                      <Route path="services" element={<Services />} />
                      <Route path="settings" element={<Settings />} />
                      <Route path="revenue" element={<Revenue />} />
                      <Route path="user" element={<User />} />
                      {/* Thêm route mặc định cho admin */}
                      <Route path="*" element={<Navigate to="dashboard" />} />
                    </Routes>
                  </div>
                </div>
              </div>
            </div>
          }
        />

        {/* Trang Client */}
        <Route
          path="/client/*"
          element={
            <div>
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
                      {/* Thêm route mặc định cho client */}
                      <Route path="*" element={<Navigate to="dashboard" />} />
                    </Routes>
                  </div>
                </div>
              </div>
            </div>
          }
        />

        {/* Route mặc định khi truy cập vào gốc "/" */}
        <Route path="/" element={<Navigate to="/client/dashboard" />} />
        {/* Nếu không có route nào khớp */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
