import React from 'react';
import bgStyles from './styles/background-overlay.module.css';
import HomeContent from './components/Home';
import NavigationBar from './components/NavBar';

function App() {
  return (
    <main className={bgStyles.backgroundOverlay}>
      <NavigationBar />
      <HomeContent />
    </main>
  );
}

export default App;
