import React, { useState, useRef } from 'react';
import ReactDOM from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getLoading } from '../../state/reducer/video';
import * as videoAction from '../../state/action/video';
import './trending-add-form.scss';

export function TrendingAddForm(props: any) {
  const { isShowing, hide, closeModal } = props;
  const [newVideo, setNewVideo] = useState({
    id: '',
    snippet: {
      channelId: '',
      title: '',
      description: '',
      thumbnails: {
        medium: {
          url: '',
        },
      },
    },
  });
  const [hasError, setHasError] = useState<any | undefined>(null);
  const isLoading = useSelector(getLoading);
  const dispatch = useDispatch();

  const videoIdRef = useRef<any>(null);
  const ChannelIdRef = useRef<any>(null);
  const videoTitleRef = useRef<any>(null);
  const videoDescriptionRef = useRef<any>(null);
  const videoImageRef = useRef<any>(null);

  //
  function handleIdChange(e: any) {
    let field = e.target.name;
    setNewVideo({
      ...newVideo,
      [field]: e.target.value,
    });
  }

  function handleSnippetChange(e: any) {
    let field = e.target.name;
    setNewVideo((prev) => ({
      ...prev,
      snippet: {
        ...prev.snippet,
        [field]: e.target.value,
      },
    }));
  }

  function handleImageChange(e: any) {
    setNewVideo((prev) => ({
      ...prev,
      snippet: {
        ...prev.snippet,
        thumbnails: {
          medium: {
            url: e.target.value,
          },
        },
      },
    }));
  }

  function formValidation() {
    if (
      !videoIdRef.current.value ||
      !ChannelIdRef.current.value ||
      !videoTitleRef.current.value ||
      !videoDescriptionRef.current.value ||
      !videoImageRef.current.value
    ) {
      return false;
    }
    return true;
  }

  async function handleSubmitNewVideo(e: any) {
    e.preventDefault();
    if (!formValidation()) {
      alert('Invalid Fields');
    } else {
      try {
        dispatch(videoAction.createNewVideo.request(newVideo));
        closeModal();
      } catch (error) {
        alert(error);
        closeModal();
        setHasError(error);
      }
    }
  }

  return isShowing
    ? ReactDOM.createPortal(
        <React.Fragment>
          <div className='modal-overlay' />
          <div
            className='modal-wrapper'
            aria-modal
            aria-hidden
            tabIndex={-1}
            role='dialog'
          >
            <div className='modal'>
              <div className='modal-header'>
                <h2 className='modal-header__title '>New video </h2>
                <button
                  type='button'
                  className='modal-close-button'
                  data-dismiss='modal'
                  aria-label='Close'
                  onClick={hide}
                >
                  <span aria-hidden='true'>&times;</span>
                </button>
              </div>
              <div className='form-container'>
                <form
                  action=''
                  className='add-form'
                  onSubmit={(e) => handleSubmitNewVideo(e)}
                >
                  <div className='form__div'>
                    <input
                      ref={videoIdRef}
                      type='text'
                      className='form__input'
                      placeholder=' '
                      name='id'
                      onChange={(e) => handleIdChange(e)}
                    />
                    <label className='form__label'>Id</label>
                  </div>
                  <div className='form__div'>
                    <input
                      ref={videoTitleRef}
                      type='text'
                      className='form__input'
                      placeholder=' '
                      name='title'
                      onChange={(e) => handleSnippetChange(e)}
                    />
                    <label className='form__label'>Title</label>
                  </div>
                  <div className='form__div'>
                    <input
                      ref={videoImageRef}
                      type='text'
                      className='form__input'
                      placeholder=' '
                      name='url'
                      onChange={(e) => handleImageChange(e)}
                    />
                    <label className='form__label'>Image</label>
                  </div>
                  <div className='form__div'>
                    <input
                      ref={ChannelIdRef}
                      type='text'
                      className='form__input'
                      placeholder=' '
                      name='channelId'
                      onChange={(e) => handleSnippetChange(e)}
                    />
                    <label className='form__label'>Channel id</label>
                  </div>
                  <div className='form__div'>
                    <input
                      ref={videoDescriptionRef}
                      type='text'
                      className='form__input'
                      placeholder=' '
                      name='description'
                      onChange={(e) => handleSnippetChange(e)}
                    />
                    <label className='form__label'>Description</label>
                  </div>
                  <input
                    type='submit'
                    className='form__button'
                    value={isLoading ? 'loading...' : 'add'}
                  />
                </form>
              </div>
            </div>
          </div>
          {hasError && <>something wrong</>}
        </React.Fragment>,
        document.body
      )
    : null;
}
