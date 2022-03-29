import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomeView from './view/homeView';

function App() {
  return (
    // Style this div to effectively change the body style
    <div className='h-screen overflow-auto'>
      <div className='w-full h-full md:monitor-outer-bezel'>
        <div className='w-full h-full md:monitor-inner-bezel'>
          <div className='relative w-full h-full md:monitor-screen monitor-screen-mobile'>
            <Routes>
              <Route path='/' element={<HomeView />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
