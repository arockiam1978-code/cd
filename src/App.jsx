import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login"; 
import 'bootstrap/dist/css/bootstrap.min.css';

/*
  Top-level App: composes Header, Hero/Content, Footer.
  When converting the rest of the site, split sections into more components.
*/
export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </Layout>
  );
}