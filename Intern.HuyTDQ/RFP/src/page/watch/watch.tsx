import { useParams } from 'react-router';
// import { get_param } from "../../util/get-param";
import WatchContent from './watch-content/watch-content';
import { Header } from '../../component/index';

import './watch.scss';
// interface MatchParams {
//   name: string;
// }
export function Watch() {
  const { video_id }: any = useParams();
  if (!video_id) {
    return <div />;
  }
  return (
    <div>
      <Header />
      <div className='watch-container'>
        <WatchContent video_id={video_id} />
      </div>
    </div>
  );
}
