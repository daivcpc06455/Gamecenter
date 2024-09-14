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

function App() {
  return (
    <Router>
      <Header />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <Sidebar />
          </div>
          <div className="col-md-9">
            <Routes>
              {/* Đường dẫn gốc trỏ tới Dashboard */}
              <Route path="/" element={<Dashboard />} />

              {/* Đường dẫn /admin sẽ trỏ đến Dashboard (trang quản lý phòng net) */}
              <Route path="/admin" element={<Dashboard />} />

              {/* Các đường dẫn khác */}
              <Route path="/rooms" element={<Rooms />} />
              <Route path="/rooms/:roomId" element={<RoomDetail />} />
              <Route path="/rooms/summary/:roomId" element={<RoomSummary />} />
              <Route path="/services" element={<Services />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/Revenue" element={<Revenue />} />
              <Route path="/User" element={<User />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
