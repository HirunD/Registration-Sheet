import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Schools from './pages/schools';
import Students from './pages/students';
import Landing from './pages/landing';

function App() {
  return (
    <div>
     <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/schools" element={<Schools />} />
          <Route path="/students" element={<Students />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
