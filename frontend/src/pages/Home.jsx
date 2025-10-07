import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  // Inline styles
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
      width: "400px",
      padding: "30px",
      borderRadius: "12px",
      boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
      backgroundColor: "#fff",
      textAlign: "center",
    },
    heading: {
      marginBottom: "20px",
      color: "#333",
    },
    paragraph: {
      marginBottom: "25px",
      color: "#555",
    },
    button: {
      padding: "12px 20px",
      border: "none",
      borderRadius: "8px",
      backgroundColor: "#007bff",
      color: "#fff",
      fontSize: "16px",
      cursor: "pointer",
    },
    buttonHover: {
      backgroundColor: "#0056b3",
    },
  };

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <h2 style={styles.heading}>Welcome to Home Page!</h2>
        <p style={styles.paragraph}>You are successfully logged in.</p>
        <button
          style={styles.button}
          onClick={() => navigate("/")}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#0056b3")}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#007bff")}
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Home;
