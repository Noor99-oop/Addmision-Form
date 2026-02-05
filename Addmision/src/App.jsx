import { useState } from 'react'
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Admission from './assets/components/admision/admission';
import Education from './assets/components/Education/education';
import Fee from './assets/components/Fee/fee';

function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<Admission />} />
        <Route path='/education' element={<Education />} />
        <Route path='/fee' element={<Fee />} />
      </Routes>

    </>
  )
}

export default App

