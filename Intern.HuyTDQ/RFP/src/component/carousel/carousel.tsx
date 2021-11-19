import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as videoAction from '../../state/action/video';
import { getMostPopularVideo, getError } from '../../state/reducer/video';
import { toast, ToastContainer } from 'react-toastify';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import './carousel.scss';

export function Carousel() {
  const [current, setCurrent] = useState(0);
  const videoList: any = useSelector(getMostPopularVideo);
  const hasError: any = useSelector(getError);
  const dispatch = useDispatch();
  const slide = videoList.data;
  const length = videoList.data.length || 0;
  const skeleton = videoList.data.length > 0 ? '' : 'skeleton';

  //
  useEffect(() => {
    let relevant = true;
    const fetchVideo = () => {
      dispatch(videoAction.mostPopular.request({ _page: 1, _limit: 8 }));
      if (hasError) {
        toast.error(hasError);
      }

      return function cleanup() {
        relevant = false;
      };
    };
    fetchVideo();
  }, []);

  //
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  //
  var image_list: Array<string> = [];
  if (slide) {
    image_list = slide.map((item: any) => {
      return item.snippet.thumbnails.high.url;
    });
  }

  return (
    <div className='slider-container'>
      <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
      <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
      <div className={['slider-image', skeleton].join(' ')}>
        {(image_list ?? []).map((slide_item, index) => {
          return (
            <div
              className={index === current ? 'slide active' : 'slide'}
              key={index}
            >
              {index === current && (
                <img src={slide_item} alt='video' className='image' />
              )}
            </div>
          );
        })}
        <ToastContainer />
        {hasError && <> no data...</>}
      </div>
    </div>
  );
}
