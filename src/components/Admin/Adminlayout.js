import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Import các thành phần của Admin
import Header from './Header';
import Sidebar from './Sidebar';
import Dashboard from './Dashboard';
import Rooms from './Rooms';
import RoomDetail from './RoomDetail';
import RoomSummary from './RoomSummary';
import Services from './Services';
import Settings from './Settings';
import Revenue from './Revenue';
import User from './User';
import EditProfile from './EditProfile'; // Trang chỉnh sửa thông tin

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
