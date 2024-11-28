import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Login, Signup, Home, About } from "./pages";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/login" Component={Login} />
        <Route path="/signup" Component={Signup} />
        <Route path="/about" Component={About} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
