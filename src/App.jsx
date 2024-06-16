import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import Home from "./Pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./Pages/About";
import YourStory from "./Pages/YourStory";
import Navigation from "./Components/Navigation";
import Contact from "./Pages/Contact";
import Footer from "./Components/Footer";
import Stories from "./Pages/Stories";
import Videodetails from "./Pages/Videodetails";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Profile from "./Pages/Profile";
import { UserContextProvider } from "./Context/UserContext";




function App() {
  return (

      <UserContextProvider>
      <Navigation/>
        <Routes >
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/yourstory" element={<YourStory />} />
          <Route path="/stories" element={<Stories />} />
          <Route path="/stories/:id" element={<Videodetails />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile/:id" element={<Profile />} />

        </Routes>
         <Footer/>
         </UserContextProvider>
  );
};

export default App;
