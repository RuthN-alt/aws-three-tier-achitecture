import React from 'react';
import architecture from '../../assets/3TierArch.png';

export default function Home() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Cloud Infrastructure Overview</h1>

      <div style={styles.card}>
        <img
          src={architecture}
          alt="architecture"
          style={styles.image}
        />

        <p style={styles.text}>
          This system demonstrates a modern cloud 3-tier architecture:
          <br />Web Tier (React UI)
          <br />App Tier (Node.js API)
          <br />Database Tier (MySQL)
        </p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    color: "white"
  },
  title: {
    marginBottom: "20px"
  },
  card: {
   background: "#052d24",
   border: "1px solid #00ff9f",
   padding: "20px",
   borderRadius: "10px",
   textAlign: "center"
  },
  image: {
    width: "100%",
    maxWidth: "700px",
    borderRadius: "10px"
  },
  text: {
    marginTop: "15px",
    lineHeight: "1.6"
  }
};