import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Rooms from './components/Rooms';
import RoomDetail from './components/RoomDetail';
import RoomSummary from './components/RoomSummary';
import Services from './components/Services';
import Settings from './components/Settings';
import Revenue from './components/Revenue';
import User from './components/User';

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
