import { useState } from 'react';
import axios from 'axios';
import Header from '../components/Header';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    axios({
      method: 'post',
      url: 'contact',
      data: { name, email, message },
    }).then((response) => {
      if (response.data.status === 'success') {
        alert('Message Sent.');
        resetForm();
      } else if (response.data.status === 'fail') {
        alert('Message failed to send.');
      }
    });
    alert('Message Sent.');
    resetForm();
  };
  const resetForm = () => {
    setName('');
    setEmail('');
    setMessage('');
  };
  return (
    <div>
      <Header />
      <div className='container contact mt-5'>
        <div className='row pt-5'>
          <div className='col-md-12'>
            <form
              onSubmit={handleSubmit}
              className='contact-form m-3 p-5 n-box2'
              method='post'
            >
              <h3 className='font-bold'>Contact Me</h3>
              <hr />
              <input
                type='text'
                className='form-control'
                placeholder='Name'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type='email'
                className='form-control'
                placeholder='Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <textarea
                className='form-control'
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <button className='primary-button submit mt-3'>SUBMIT</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
