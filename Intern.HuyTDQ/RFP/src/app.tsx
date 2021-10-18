import React from 'react';
import './styles/app.scss';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Video from './component/Video/Video'
import Home from './page/Home/Home';
function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Home}/>
      </Switch>
    </Router>
  //   <div className="app">
  //     <h1>Mytube</h1>
  //    <div className="home-content">
  //      <Video/>
  //    </div>
  //   </div>
  );
}

export default App;
