import React from 'react';
import bgStyles from './Styles/BackgroundOverlay.module.css';
import HomeComponent from './Components/Home';
import AboutComponent from './Components/About';
import SkillsAndTechsComponent from './Components/SkillsAndTechs';
import ContactMeComponent from './Components/ContactMe';
import NavigationBar from './Components/NavBar';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className={bgStyles.backgroundOverlay}>
      <header>
        <NavigationBar />
      </header>
      <section className={bgStyles.content}>
        <Routes>
          <Route path='/' element={<HomeComponent />} />
          <Route path='/about' element={<AboutComponent />} />
          <Route path='/skillsandtechs' element={<SkillsAndTechsComponent />} />
          <Route path='/contactme' element={<ContactMeComponent />} />
        </Routes>
      </section>
    </div>
  );
}

export default App;
