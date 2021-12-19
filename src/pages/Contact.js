import React from 'react';
import Header from '../components/Header';

const Contact = () => {
  return (
    <div>
      <Header />
      <div className='container contact mt-5'>
        <div className='row pt-5'>
          <div className='col-md-12'>
            <div className='contact-form m-3 p-5 n-box2'>
              <input type='text' className='form-control' placeholder='Name' />
              <input
                type='email'
                className='form-control'
                placeholder='Email'
              />
              <textarea className='form-control' rows={3} defaultValue={''} />
              <button className='primary-button mt-5'>SUBMIT</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
