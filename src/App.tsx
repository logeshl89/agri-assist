import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import FarmerDashboard from './pages/FarmerDashboard';
import AdminDashboard from './pages/AdminDashboard';
// import HowItWorks from './pages/HowItWorks';
// import Login from './pages/Login';
// import Register from './pages/Register';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/*<Route path="/how-it-works" element={<HowItWorks />} />*/}
        {/*<Route path="/login" element={<Login />} />*/}
        {/*<Route path="/register" element={<Register />} />*/}
        
        {/* Protected Routes */}
        <Route path="/farmer/*" element={
          <ProtectedRoute role="farmer">
            <FarmerDashboard />
          </ProtectedRoute>
        } />
        
        <Route path="/admin/*" element={
          <ProtectedRoute role="admin">
            <AdminDashboard />
          </ProtectedRoute>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;