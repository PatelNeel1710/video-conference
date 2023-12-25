import React from 'react';
import logo from './logo.svg';
import { Route, Link, Routes } from "react-router-dom";
import './App.css';
import LoginComponent from './pages/login/login';
import DashboardComponent from './pages/dashboard/dashboard';
import NoMatchComponent from './pages/no-match/nomatch';
import HomeComponent from './pages/home/home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginComponent />}>
          <Route index element={<HomeComponent />} />
          <Route path="dashboard" element={<DashboardComponent />} />

          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          <Route path="*" element={<NoMatchComponent />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
