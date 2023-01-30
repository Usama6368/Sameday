import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { routes } from "./routes";
import Footer from "./Layout/Footer/Footer";
import Header from "./Layout/Header/Header";
import "./App.css";
export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {routes.map((item) => (
          <Route key={item.path} path={item.path} element={item.element} />
        ))}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
