import { useState, useEffect } from 'react';
import { Header } from '../../component';
import { Link } from 'react-router-dom';
import { Carousel } from '../../component';
import { useDispatch, useSelector } from 'react-redux';
import * as videoAction from '../../state/action/video';
import { getMostPopularVideo, getLoading } from '../../state/reducer/video';
import './landing.scss';

export function Landing() {
  const [hasError, setHasError] = useState(false);
  const videoList: any = useSelector(getMostPopularVideo);
  const isLoading: any = useSelector(getLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    let relevant = true;
    const fetchVideo = () => {
      try {
        dispatch(videoAction.mostPopular.request());
        const response = videoList;
        console.log(response);
      } catch (error) {
        if (relevant) setHasError(true);
      } finally {
      }

      return function cleanup() {
        relevant = false;
      };
    };
    fetchVideo();
  }, [JSON.stringify(videoList)]);
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
          {!isLoading && <Carousel slide={videoList.data} />}
        </div>
      </div>
    </div>
  );
}
