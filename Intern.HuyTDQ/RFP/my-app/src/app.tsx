import React from 'react';
import './styles/app.scss';
import Video from './component/Video/Video'

function App() {
  return (
    <div className="app">
      <h1>Mytube</h1>
     <div className="home-content">
       <Video/>
     </div>
    </div>
  );
}

export default App;
