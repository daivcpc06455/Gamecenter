// src/App.js

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
import revenue from './components/revenue';
import user from './components/user';

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
              <Route path="/" element={<Dashboard />} />
              <Route path="/rooms" element={<Rooms />} />
              <Route path="/rooms/:roomId" element={<RoomDetail />} />
              <Route path="/rooms/summary/:roomId" element={<RoomSummary />} /> {/* Route cho RoomSummary */}
              <Route path="/services" element={<Services />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="./revenue" element={<revenue />} /> 
              <Route path="./user" element={<user />} /> 

            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
