import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomeView from './view/homeView';

function App() {
  return (
    // Style this div to effectively change the body style
    <div className='h-screen overflow-auto'>
      <Routes>
        <Route path='/' element={<HomeView />} />
      </Routes>
    </div>
  );
}

export default App;
