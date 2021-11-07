import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './trending-add-form.scss';
import { Command } from '../../access/api/command-api';

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
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState<any | undefined>();

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
    try {
      const response = await Command.trending.add(newVideo);
      if (response) {
        alert('item was added in last page');
        closeModal();
        window.location.reload();
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
              <div className='l-form'>
                <form
                  action=''
                  className='form'
                  onSubmit={(e) => handleSubmitNewVideo(e)}
                >
                  <div className='form__div'>
                    <input
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
                    value='Adding'
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