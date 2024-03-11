import React from 'react';
import Accessories from './screens/Accessories'; // This assumes Accessories.js is in the screens directory
import './App.css'; // Your App's CSS

function App() {
  return (
    <div className="App">
      {/* Render the Accessories component as the main content of the App */}
      <Accessories />
    </div>
  );
}

export default App;
