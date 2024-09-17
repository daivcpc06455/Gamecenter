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
import UsersTable from './UsersTable';


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
              <Route path="/admin/rooms" element={<Rooms />} />
              <Route path="/admin/rooms/:roomId" element={<RoomDetail />} />
              <Route path="/rooms/summary/:roomId" element={<RoomSummary />} />
              <Route path="/admin/services" element={<Services />} />
              <Route path="/admin/settings" element={<Settings />} />
              <Route path="/admin/revenue" element={<Revenue />} />
              <Route path="/admin/user" element={<User />} />
              <Route path="/admin/users-table" element={<UsersTable />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminLayout;
