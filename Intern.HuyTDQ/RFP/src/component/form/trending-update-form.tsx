import React, { useRef, useState } from 'react';
import ReactDOM from 'react-dom';

import { Command } from '../../access/api/command-api';
import './trending-update-form.scss';

export function TrendingUpdateForm(props: any) {
  const { videoInformation, isShowing, hide, closeModal } = props;
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

  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState<any | undefined>();

  const videoIdRef = useRef<any>(null);
  const ChannelIdRef = useRef<any>(null);
  const videoTitleRef = useRef<any>(null);
  const videoDescriptionRef = useRef<any>(null);
  const videoImageRef = useRef<any>(null);

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
  async function handleSubmitNewVideo(e: any) {
    setIsLoading(true);
    e.preventDefault();
    const data = {
      id: videoIdRef.current.value,
      snippet: {
        channelId: ChannelIdRef.current.value,
        title: videoTitleRef.current.value,
        description: videoDescriptionRef.current.value,
        thumbnails: {
          medium: {
            url: videoImageRef.current.value,
          },
        },
      },
    };
    try {
      const response = await Command.trending.update(data);
      if (response) {
        alert('item was update');
        closeModal();
      }
    } catch (error) {
      alert(error);
      closeModal();
      setHasError(error);
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
                <h2 className='modal-header__title '>Update video </h2>
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
                  className='update-form'
                  onSubmit={(e) => handleSubmitNewVideo(e)}
                >
                  <div className='form__div'>
                    <input
                      ref={videoIdRef}
                      type='text'
                      className='form__input'
                      placeholder=' '
                      name='id'
                      defaultValue={videoInformation.id ?? 'none'}
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
                      defaultValue={videoInformation.snippet.title ?? 'none'}
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
                      defaultValue={
                        videoInformation.snippet.thumbnails.medium.url ?? 'none'
                      }
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
                      defaultValue={
                        videoInformation.snippet.channelId ?? 'none'
                      }
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
                      defaultValue={
                        videoInformation.snippet.description ?? 'none'
                      }
                      onChange={(e) => handleSnippetChange(e)}
                    />
                    <label className='form__label'>Description</label>
                  </div>
                  <input
                    type='submit'
                    className='form__button'
                    value='Update'
                  />
                </form>
                {hasError && <>something wrong</>}
              </div>
            </div>
          </div>
        </React.Fragment>,
        document.body
      )
    : null;
}
