import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../Styles/Auth.css";

function ResetPassword() {
  const { token } = useParams();
  const [newPassword, setNewPassword] = useState("");
  const API_BASE_URL = "https://passwordserver-6xqj.onrender.com";

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${API_BASE_URL}/auth/reset-password/${token}`, { newPassword });
      alert(res.data.message);
    } catch (err) {
      alert("Error resetting password");
    }
  };

  return (
    <div className="auth-container">
      <h2>Reset Password</h2>
      <form onSubmit={handleSubmit}>
        <label>New Password</label>
        <input type="password" placeholder="Enter new password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} required />
        <button type="submit">Reset Password</button>
      </form>
    </div>
  );
}

export default ResetPassword;