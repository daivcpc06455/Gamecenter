import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Import các thành phần của Admin
import Header from './Routes/Header';
import Sidebar from './Routes/Sidebar';
import Dashboard from './Routes/Dashboard';
import Rooms from './Routes/Rooms';
import RoomDetail from './Routes/RoomDetail';
import RoomSummary from './Routes/RoomSummary';
import Services from './Routes/Services';
import Settings from './Routes/Settings';
import Revenue from './Routes/Revenue';
import User from './Routes/User';
import EditProfile from './Routes/EditProfile'; // Trang chỉnh sửa thông tin

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
              <Route path="/edit-profile" element={<EditProfile />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminLayout;
