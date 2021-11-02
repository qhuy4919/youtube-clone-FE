import { useState, useRef } from 'react';
import { useParams } from 'react-router';
import WatchContent from './watch-content/watch-content';
import { Header, Sidebar } from '../../component/index';

import './watch.scss';
// interface MatchParams {
//   name: string;
// }
export function Watch() {
  const { video_id }: any = useParams();
  const [acitveSidebar, setActiveSidebar] = useState<Boolean>(true);
  const watchContainer = useRef<HTMLHeadingElement>(null);

  if (!video_id) {
    return <div />;
  }
  function handleActiveSidebar() {
    setActiveSidebar(!acitveSidebar);
    if (acitveSidebar) {
      if (watchContainer.current) {
        watchContainer.current.style.paddingLeft = '0';
      }
    } else {
      if (watchContainer.current) {
        watchContainer.current.style.paddingLeft = 'var(--sidebar-left-width)';
      }
    }
  }
  return (
    <div>
      <Header onActiveSidebar={handleActiveSidebar} />
      <div className='watch-container'>
        <Sidebar />
        {/* <div className='home-sidebar'>{acitveSidebar && <Sidebar />}</div> */}
        <WatchContent video_id={video_id} />
      </div>
    </div>
  );
}
