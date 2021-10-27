import React from 'react';
import './style/app.scss';
import './style/helpers/variable.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home, Watch } from './page/index';
function App(props: any) {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/watch/:video_id' component={Watch} exact />
      </Switch>
    </Router>
  );
}

export default App;
