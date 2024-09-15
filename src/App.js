import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
import Login from './components/Admin/Login'; // Trang đăng nhập
import Register from './components/Admin/Register'; // Trang đăng ký
import EditProfile from './components/Admin/EditProfile'; // Trang chỉnh sửa thông tin
import UsersTable from './components/Admin/UsersTable';

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
              <Route path="/Revenue" element={<Revenue />} />
              <Route path="/User" element={<User />} />
              <Route path="/UsersTable" element={<UsersTable />} />
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
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/*" element={<AdminLayout />} />
      </Routes>
    </Router>
  );
}

export default App;
