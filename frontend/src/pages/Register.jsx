import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      const response = await fetch("http://localhost:5000/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      const data = await response.json();
      if (response.ok) {
        setMessage("Registration successful!");
        setTimeout(() => navigate("/"), 1000);
      } else {
        setMessage(data.message);
      }
    } catch (err) {
      setMessage("Server error. Please try again later.");
    }
  };

  // Inline styles
  const styles = {
    container: {
      width: "350px",
      margin: "80px auto",
      padding: "30px",
      backgroundColor: "#f8f9fa",
      borderRadius: "12px",
      boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
      textAlign: "center",
      fontFamily: "Arial, sans-serif",
    },
    heading: {
      marginBottom: "25px",
      color: "#333",
    },
    input: {
      width: "100%",
      padding: "12px 15px",
      margin: "10px 0",
      border: "1px solid #ccc",
      borderRadius: "8px",
      fontSize: "16px",
      outline: "none",
    },
    inputFocus: {
      borderColor: "#007bff",
    },
    button: {
      width: "100%",
      padding: "12px",
      marginTop: "15px",
      border: "none",
      borderRadius: "8px",
      backgroundColor: "#007bff",
      color: "white",
      fontSize: "16px",
      cursor: "pointer",
    },
    message: {
      marginTop: "15px",
      fontSize: "14px",
      color: message.includes("successful") ? "#28a745" : "#d9534f",
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Register</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        style={styles.input}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={styles.input}
      />
      <button style={styles.button} onClick={handleRegister}>
        Register
      </button>
      {message && <p style={styles.message}>{message}</p>}
    </div>
  );
}

export default Register;
