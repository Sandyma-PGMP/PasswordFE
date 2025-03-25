import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../Styles/Auth.css";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const API_BASE_URL = "https://passwordserver-6xqj.onrender.com";
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = axios.post(`${API_BASE_URL}/auth/create-user`, { email, password });
      alert(res.data.message);
    } catch (err) {
      alert("Error creating account");}
  };

  return (
    <div className="auth-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        
        <label>Password</label>
        <input type="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        
        <button type="submit">Sign Up</button>
      </form>
      <p>Already have an account? <Link to="/" className="link">Login</Link></p>
    </div>
  );
}

export default Signup;