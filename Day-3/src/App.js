import React, { useState } from "react";
import Navbar from "./components/Navbar";    
import News from "./components/News";                 
import { BrowserRouter, Routes, Route } from "react-router-dom";   // Importing React Router

export default function App() {
  const [mode, setMode] = useState("light");       

  const changeMode = () => {                      // Function to toggle between dark and light mode
    if (mode === "light") {
      setMode("dark");                                 // switching to dark mode
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";      // switching to light mode
      document.body.style.color = "black";
    }
  };

  return (
    <div>
      <BrowserRouter>   
        <Navbar mode={mode} changeMode={changeMode} />
        <Routes>
            <Route path="/" element={<News key="general" mode={mode} category="general" />} />
            <Route path="/business" element={<News key="business" mode={mode} category="business" />} />
            <Route path="/entertainment" element={<News key="entertainment" mode={mode} category="entertainment" />} />
            <Route path="/health" element={<News key="health" mode={mode} category="health" />} />
            <Route path="/science" element={<News key="science" mode={mode} category="science" />} />
            <Route path="/sports" element={<News key="sports" mode={mode} category="sports" />} />
            <Route path="/technology" element={<News key="technology" mode={mode} category="technology" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
