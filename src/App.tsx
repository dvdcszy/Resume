import React from 'react';
//  import logo from './logo.svg';
import mainStyles from './styles/App.module.css';
import bgStyles from './styles/background-rectange.module.css'

import NavigationBar from './NavBar';

function App() {
  return (
    <div className={bgStyles.rectangle}>
      <NavigationBar/>
      <div className={mainStyles.mainContent}>
        <h3>HELLO, I&apos;M</h3>
        <h2>DAVID CSIZY</h2>
        <h4>Lorem ipsum dolor sit amet, consectetuer adip</h4>
      </div>
    </div>

  );
}

export default App;
