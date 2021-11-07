import React from 'react';
import ReactDOM from 'react-dom';
import './trending-add-form.scss';
export function TrendingAddForm(props: any) {
  const { isShowing, hide } = props;

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
                <form action='' className='form'>
                  <div className='form__div'>
                    <input
                      type='text'
                      className='form__input'
                      placeholder=' '
                    />
                    <label className='form__label'>Id</label>
                  </div>

                  <div className='form__div'>
                    <input
                      type='password'
                      className='form__input'
                      placeholder=' '
                    />
                    <label className='form__label'>Title</label>
                  </div>

                  <div className='form__div'>
                    <input
                      type='text'
                      className='form__input'
                      placeholder=' '
                    />
                    <label className='form__label'>Image</label>
                  </div>

                  <input
                    type='submit'
                    className='form__button'
                    value='Adding'
                  />
                </form>
              </div>
            </div>
          </div>
        </React.Fragment>,
        document.body
      )
    : null;
}
