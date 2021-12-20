import React from 'react';
import {
  FaReact,
  FaBootstrap,
  FaJs,
  FaNodeJs,
  FaHtml5,
  FaCss3,
  FaPython,
} from 'react-icons/fa';
import { SiMongodb } from 'react-icons/si';

const Carousel = () => {
  return (
    <div>
      <div className='carousel-parent position-relative' id='carousel'>
        <h1 className='position-absolute top-0 start-0 end-0 text-center mt-5'>
          Technologies I use
        </h1>
        <div className='gallery'>
          <span style={{ '--i': 1 }}>
            <FaReact color='cyan' />
          </span>
          <span style={{ '--i': 2 }}>
            <FaBootstrap color='blue' />
          </span>
          <span style={{ '--i': 3 }}>
            <FaJs color='yellow' />
          </span>
          <span style={{ '--i': 4 }}>
            <FaNodeJs color='green' />
          </span>
          <span style={{ '--i': 5 }}>
            <FaHtml5 color='orangered' />
          </span>
          <span style={{ '--i': 6 }}>
            <FaCss3 color='blue' />
          </span>
          <span style={{ '--i': 7 }}>
            <SiMongodb color='green' />
          </span>
          <span style={{ '--i': 8 }}>
            <FaPython color='lightblue' />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
