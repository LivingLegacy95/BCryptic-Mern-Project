import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import DashboardPage from './views/DashboardPage';
import DetailPage from './views/DetailPage'
import Trending from './components/Trending';
import React from 'react';


function App() {
  return (
      <div className="App">
        <nav className="App-header">
        <h1>BCryptic</h1>
        </nav>
        <p><Link to = 'dashboard'>To the Moon</Link></p>
        <Routes>
          <Route path="/dashboard" element={<DashboardPage/>}/>
          <Route path="/coin/:id" element={<DetailPage/>}/>
          <Route path="/search/trending" element={<Trending />}/>
        </Routes>
      </div>
  );
}

export default App;
