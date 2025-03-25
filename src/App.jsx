import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ForgotPassword from "./Pages/ForgotPassword";
import ResetPassword from "./Pages/ResetPassword";
import Login from "./Pages/Login";
import Signup from "./Pages/SignUp";
import './App.css'

function App() {
 

  return (
    <>
      <Router>
      <Routes>
      <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
