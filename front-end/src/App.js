import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/common/Header';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import RegisterPage from './pages/RegisterPage';
import TagSearchPage from './pages/TagSearchPage';
import TempPage from './pages/TempPage';
import TestPage from './pages/TestPage';
import VsPage from './pages/VsPage';

const App = () => {
  return (
    <Routes>
      <Route element={<Header></Header>}>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/tagsearch" element={<TagSearchPage />} />
        <Route path="/test" element={<TestPage />} />
        <Route path="/vs" element={<VsPage />} />
        <Route path="/temp" element={<TempPage />} />
      </Route>
    </Routes>
  );
};

export default App;
