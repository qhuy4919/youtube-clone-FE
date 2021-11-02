import './style/index.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home, Watch, NotFound } from './page/index';

function App(props: any) {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/watch/:video_id' component={Watch} exact />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
