import React from 'react'
import '../blocks/Preloader.css'

const Preloader = () => {
  return (
    <div>
      <div className="preloader">
        <div className="preloader-circle"></div>
        <p className='preloader-text'>Searching for news...</p>
      </div>
    </div>
  )
}

export default Preloader
