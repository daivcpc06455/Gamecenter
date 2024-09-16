import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import layout cho Admin và Client
import AdminLayout from './components/Admin/Adminlayout';
import ClientLayout from './components/Client/Clientlayout'; 


;

function App() {
  return (
    <Router>
      <Routes>
        {/* Route dành cho Admin */}
        <Route path="/admin/*" element={<AdminLayout />} />

        {/* Route dành cho Client */}
        <Route path="/*" element={<ClientLayout />} />
        </Routes>
       
    </Router>

  );
}

export default App;
