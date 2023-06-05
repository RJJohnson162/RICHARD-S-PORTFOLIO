import React from 'react';
import { motion } from 'framer-motion';

import { images } from '../../constants';
import './About.scss';

const abouts = [
  { title: 'Web Development', description: 'My Forte` in web development is to revolutionize the industry', imgUrl: images.about01},
  { title: 'Front-end Development', description: 'I have emersed practical experience in building Front-end consoles ', imgUrl: images.about03},
  { title: 'UI/UX design', description: 'I have exemplary  skills and ready to turn heads with my state of the art layout design skills', imgUrl: images.about02},
  { title: 'Web Animations', description: 'I am good in using animations in my projects', imgUrl: images.about04}
]

const About = () => {
  return (
    <>
      <h2 className='head-text'>
        I know that
        <span> Good Development </span>
        <br />
        means
        <span> Good Business</span>
      </h2>

      <div className='app__profiles'>
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className='app__profile-item'
            key={about.title + index}
          >
            <img src={about.imgUrl} alt='about.title' />
            <h2 className='bold-text' style={{ marginTop: 20 }}>{about.title}</h2>
            <p className='p-text' style={{ marginTop: 10 }}>{about.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default About;
