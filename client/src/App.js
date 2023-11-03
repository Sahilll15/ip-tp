import LoginForm from "./pages/Login"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import RegisterForm from "./pages/Register"
import Home from "./pages/Home"
import Product from "./pages/Product"

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
      </Routes>
    </Router>
  )
}