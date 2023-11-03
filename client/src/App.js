import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Import your components here
import LoginForm from './pages/Login';
import RegisterForm from './pages/Register'
import Home from './pages/Home';
import ProtectedRoutes from './components/ProtectedRoutes';
import AddForm from './pages/AddForm';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />

          <Route path="/" element={<ProtectedRoutes />} >
            <Route path="/" element={<Home />} />
            <Route path="/form" element={<AddForm />} />

          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
