import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!username || !password) {
      setError("Please enter username and password");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        setError("");
        navigate("/home"); // Login success → navigate to Home
      } else {
        setError(data.message || "Incorrect username or password");
      }
    } catch (err) {
      setError("Server error. Please try again later.");
    }
  };

  // Inline styles (same as before)
  const styles = {
    page: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      backgroundColor: "#f0f2f5",
      fontFamily: "Arial, sans-serif",
    },
    container: {
      width: "350px",
      padding: "30px",
      borderRadius: "12px",
      boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
      backgroundColor: "#fff",
      textAlign: "center",
    },
    heading: { marginBottom: "25px", color: "#333" },
    input: {
      width: "75%",
      padding: "12px 15px",
      margin: "10px 0",
      border: "1px solid #ccc",
      borderRadius: "8px",
      fontSize: "16px",
      outline: "none",
    },
    button: {
      width: "75%",
      padding: "12px",
      marginTop: "15px",
      border: "none",
      borderRadius: "8px",
      backgroundColor: "#007bff",
      color: "#fff",
      fontSize: "16px",
      cursor: "pointer",
    },
    registerLink: {
      color: "#007bff",
      cursor: "pointer",
      textDecoration: "underline",
    },
    error: { color: "red", marginTop: "10px" },
  };

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <h2 style={styles.heading}>Login</h2>

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

        <button style={styles.button} onClick={handleLogin}>
          Login
        </button>

        {error && <p style={styles.error}>{error}</p>}

        <p>
          Don't have an account?{" "}
          <span
            style={styles.registerLink}
            onClick={() => navigate("/register")}
          >
            Register here
          </span>
        </p>
      </div>
    </div>
  );
}

export default Login;
