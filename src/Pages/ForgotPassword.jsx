import React, { useState } from "react";
import axios from "axios";
import "../Styles/Auth.css";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const API_BASE_URL = "https://passwordserver-6xqj.onrender.com";


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = axios.post(`${API_BASE_URL}/auth/forgot-password`, { email });
      alert(res.data.message);
    } catch (err) {
      alert("Error sending reset email");

    }
  };

  return (
    <div className="auth-container">
      <h2>Forgot Password</h2>
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <button type="submit">Send Reset Link</button>
      </form>

    </div>
  );
}

export default ForgotPassword;