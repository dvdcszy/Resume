import React from 'react';
import bgStyles from './Styles/BackgroundOverlay.module.css';
import HomeComponent from './Components/Home';
import AboutComponent from './Components/About';
import SkillsAndTechsComponent from './Components/SkillsAndTechs';
import ContactMeComponent from './Components/ContactMe';
import NavigationBar from './Components/NavBar';
import { Routes, Route } from 'react-router-dom';
import './Styles/Bulma/css/mystyles.css';

function App() {
  return (
    <div className={bgStyles.backgroundOverlay}>
      <NavigationBar />
      <div className='container is-flex is-flex-grow-1 is-align-items-center is-justify-content-center'>
        <Routes>
          <Route path='/' element={<HomeComponent />} />
          <Route path='/about' element={<AboutComponent />} />
          <Route path='/skillsandtechs' element={<SkillsAndTechsComponent />} />
          <Route path='/contactme' element={<ContactMeComponent />} />
          <Route path='*' element={<HomeComponent />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
