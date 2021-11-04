import { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { useDispatch, useSelector, connect } from 'react-redux';
import * as VideoAction from '../../state/action/video';
import { getMostPopularVideo } from '../../state/reducer/video';

export function Trending() {
  const videoList = useSelector((state) => getMostPopularVideo(state));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(VideoAction.mostPopular.request());
  }, []);
  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
}
