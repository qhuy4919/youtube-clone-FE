import { Header } from '../../component';
import { Link } from 'react-router-dom';
import './landing.scss';

export function Landing() {
  return (
    <div>
      <Header />
      <div id='landing-container'>
        <div id='content-container'>
          <h1>Youtube Clone</h1>
          <p>GoTecQ intern's project</p>
          <Link to='/home'>
            <button>Explore</button>
          </Link>
        </div>
        <div id='bg-container'>
          <img
            src='https://brandlogos.net/wp-content/files/nAMr39DXwW/YouTube_icon_F7801.svg'
            alt=''
          />
        </div>
      </div>
    </div>
  );
}
