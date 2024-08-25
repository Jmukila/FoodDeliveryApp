import React from 'react';
import { assets } from '../../assets/assets';
import './AppDownload.css'
function AppDownload() {
  return (
    <div className='app-download' id='app-download'>
      <p>For a Better Experience<br/>Download the Tomato App</p>
      <div className='app-download-platforms'>
        <img src={assets.play_store} alt='Download on Google Play' />
        <img src={assets.app_store} alt='Download on the App Store' />
      </div>
    </div>
  );
}

export default AppDownload;
