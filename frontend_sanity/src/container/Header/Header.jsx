import React from 'react';
import { easeInOut, motion } from 'framer-motion';

import { images } from '../../constants';
import { AppWrap } from '../../wrapper';
import './Header.scss';

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0,1],
    transition: {
      duration: 1,
      ease: 'easeInOut'
    }
  }
}

const Header = () => {
  return (
    <div className='app__header app__flex'>
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1]}}
        transition={{duration: 0.8}}
        className='app__header-info'
      >
        <div className='app__header-badge'>
          <div className='badge-cmp'>

            <span>👋</span>
            <div style={{marginLeft:20 }}>
              <p className='p-text'>Hello, I am</p>
              <h1 className='head-text'>Richard</h1>
            </div>
          </div>

          <div className='tag-cmp app__flex'>
            <p className='p-text'>Web Developer</p>
            <p className='p-text'>U/X Designer</p>
            </div> 
          </div>
      </motion.div>

      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1]}}
        transition={{duration: 0.8, delayChildren: 0.5}}
        className='app__header-img'
      >
        <img className='Richard' src = {images.profile1} alt = "profile_bg"/>
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{duration: 0.5, ease: easeInOut}}
          src = {images.circle}
          alt = "profile circle"
          className='overlay__circle'
        />
      </motion.div>

      <motion.div
        variant = {scaleVariants}
        whileInView={scaleVariants.whileInView}
        className='app__header-circles'
      >
        {[images.javascript, images.react, images.sass].map((circle, index) => (
          <div className='circle-cmp app__flex' key = {`circle-${index}`}>
            <img src = {circle} alt='circle' />
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default AppWrap(Header, 'home');