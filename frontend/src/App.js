// * CSS:
import './App.css';
// * External Dependencies:
import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
// * Own Dependencies:
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="page">
      <Header />
      <div className="content">
        Content
      </div>
      <Footer />
    </div>
  );
}

export default App;