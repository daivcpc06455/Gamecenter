import React from 'react';
import './components/Client/Routes/Styles1.css';


import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Import các thành phần của Admin
import Header from './components/Admin/Routes/Header';
import Sidebar from './components/Admin/Routes/Sidebar';
import Dashboard from './components/Admin/Routes/Dashboard';
import Rooms from './components/Admin/Routes/Rooms';
import RoomDetail from './components/Admin/Routes/RoomDetail';
import RoomSummary from './components/Admin/Routes/RoomSummary';
import Services from './components/Admin/Routes/Services';
import Settings from './components/Admin/Routes/Settings';
import Revenue from './components/Admin/Routes/Revenue';
import User from './components/Admin/Routes/User';
import Login from './components/Admin/Routes/Login'; // Trang đăng nhập
import Register from './components/Admin/Routes/Register'; // Trang đăng ký
import EditProfile from './components/Admin/Routes/EditProfile'; // Trang chỉnh sửa thông tin

// Import các thành phần của Client
import ClientHeader from './components/Client/Routes/Header';
import ClientSidebar from './components/Client/Routes/Sidebar';
import ClientDashboard from './components/Client/Routes/ClientPage';
import ClientProductList from './components/Client/Routes/ProductList';
import ClientFeaturedProducts from './components/Client/Routes/FeaturedProducts';

// Layout cho Admin
function AdminLayout() {
  return (
    <>
      <Header />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <Sidebar />
          </div>
          <div className="col-md-9">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/admin" element={<Dashboard />} />
              <Route path="/rooms" element={<Rooms />} />
              <Route path="/rooms/:roomId" element={<RoomDetail />} />
              <Route path="/rooms/summary/:roomId" element={<RoomSummary />} />
              <Route path="/services" element={<Services />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/revenue" element={<Revenue />} />
              <Route path="/user" element={<User />} />
              <Route path="/edit-profile" element={<EditProfile />} /> {/* Thêm route cho chỉnh sửa thông tin */}
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        {/* Trang đăng nhập và đăng ký */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Layout của Admin */}
        <Route path="/admin/*" element={<AdminLayout />} />

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
