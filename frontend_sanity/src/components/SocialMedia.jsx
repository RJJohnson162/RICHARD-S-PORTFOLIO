import React from 'react';
import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => {
  const handleLinkClick = (url) => {
    window.open(url, '_blank'); // Opens the link in a new tab
  };

  return (
    <div className='app__social'>
      <div onClick={() => handleLinkClick('https://twitter.com/Richard_rjxyz')}>
        <BsTwitter />
      </div>
      <div onClick={() => handleLinkClick('https://www.instagram.com/rj_johnson_gse/')}>
        <BsInstagram />
      </div>
      <div onClick={() => handleLinkClick('https://www.facebook.com/profile.php?id=100067903295999')}>
        <FaFacebookF />
      </div>
    </div>
  );
};

export default SocialMedia;
