import React from 'react';
import Carousel from '../components/Carousel';
import Header from '../components/Header';
import { DiHtml5, DiCss3, DiJavascript } from 'react-icons/di';

const Home = () => {
  return (
    <div>
      <Header />
      <div
        className='introduction flex-with-center'
        style={{ backgroundImage: `url('./introbg2.svg')` }}
      >
        <div>
          <h1 data-aos='fade-up'>SHIVAM</h1>
          <div className='intro-content d-flex justify-content-between'>
            <p>MERN Stack Developer</p>
            <button className='primary-button font-bold'>Get Started</button>
          </div>
        </div>
      </div>

      <Carousel />

      <div>
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
          <path
            fill='#001220'
            fill-opacity='1'
            d='M0,256L24,229.3C48,203,96,149,144,149.3C192,149,240,203,288,240C336,277,384,299,432,261.3C480,224,528,128,576,101.3C624,75,672,117,720,154.7C768,192,816,224,864,197.3C912,171,960,85,1008,64C1056,43,1104,85,1152,133.3C1200,181,1248,235,1296,250.7C1344,267,1392,245,1416,234.7L1440,224L1440,0L1416,0C1392,0,1344,0,1296,0C1248,0,1200,0,1152,0C1104,0,1056,0,1008,0C960,0,912,0,864,0C816,0,768,0,720,0C672,0,624,0,576,0C528,0,480,0,432,0C384,0,336,0,288,0C240,0,192,0,144,0C96,0,48,0,24,0L0,0Z'
          ></path>
        </svg>
      </div>

      <div className='container'>
        <div className='row justify-content-start'>
          <div className='col-md-4'>
            <div data-aos='fade-right' className='n-box2 p-5 font-bold'>
              <h1>Yes you're right...</h1>
              <br />
              <p>I'm a Javascript Buff...</p>
            </div>
          </div>
        </div>

        <div className='row pt-5 justify-content-center'>
          <div className='col-md-4'>
            <div data-aos='fade-up' className='svgs'>
              <DiHtml5 color='orangered' />
              <DiCss3 color='blue' />
              <DiJavascript color='FFC107' />
            </div>
          </div>
        </div>

        <div className='row pt-5 justify-content-end'>
          <div className='col-md-4'>
            <div data-aos='fade-left' className='n-box2 p-5 font-bold'>
              <p>
                Javascript is one of the most top-ranked programming languages
                because of its ubiquitous use on all platforms and mass
                adoption. Main use cases: Web Development
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className='devstack container my-5 n-box2 py-5'>
        <div className='text-center'>
          <h3 className='font-bold text-center'>My Development Stack</h3>
          <hr />
          <img src='./developer.svg' alt='' height='200' width='200' />
        </div>
        <div className='row'>
          <div className='col-md-4'>
            <div className='font-bold'>
              <h3 className='font-bold'>Front End</h3>
              <hr />
              <p>HTML/CSS</p>
              <p>Javascript</p>
              <p>React</p>
              <p>Redux</p>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='font-bold text-center'>
              <h3 className='font-bold'>UI/Styling</h3>
              <hr />
              <p>Bootstrap</p>
              <p>Tailwind CSS</p>
              <p>Material UI</p>
              <p>Semantic UI</p>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='font-bold text-end'>
              <h3 className='font-bold'>Backend/DB</h3>
              <hr />
              <p>Node JS</p>
              <p>Express</p>
              <p>Mongo DB</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h3 className='test font-bold text-center'>Who is Shivam?</h3>
        <div
          className='whoami flex-with-center'
          style={{ backgroundImage: `url('./whoami.svg')` }}
        >
          <div>
            <h3>Hello</h3>
            <hr />
            <p>
              <pre>
                {JSON.stringify(
                  {
                    name: 'Shivam Kumar',
                    from: 'India',
                    age: 20,
                    gender: 'male',
                  },
                  null,
                  2
                )}
              </pre>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
