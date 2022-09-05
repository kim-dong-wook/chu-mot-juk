import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SliderContainer from './components/temp/SliderContainer';
import MainPage from './pages/MainPage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/a" element={<SliderContainer />} />
    </Routes>
  );
};

export default App;
