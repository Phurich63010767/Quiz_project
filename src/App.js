import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Quiz1 from './pages/Quiz1';
import Quiz2 from './pages/Quiz2';
import Quiz3 from './pages/Quiz3';
import Quiz4 from './pages/Quiz4';

const App = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/Quiz1">Quiz 1</Link></li>
          <li><Link to="/Quiz2">Quiz 2</Link></li>
          <li><Link to="/Quiz3">Quiz 3</Link></li>
          <li><Link to="/Quiz4">Quiz 4</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/Quiz1" element={<Quiz1 />} />
        <Route path="/Quiz2" element={<Quiz2 />} />
        <Route path="/Quiz3" element={<Quiz3 />} />
        <Route path="/Quiz4" element={<Quiz4 />} />
      </Routes>
    </Router>
  );
};

export default App;
