import React from 'react'
import banner from '../img/banner2.svg'
import { Link, useRouteError } from 'react-router-dom'
import Home from '../pages/Home'

const Banner = () => {

  return (
    <div className='banner'>
        <div className='container banner'>
            <div className='bannerLeft'>
                <h2 className='bannerTitle'>Buy & Sell Digital Assets In The Rockie</h2>
                <p className='bannerText'>Coin rockie is the easiest, safest, and fastest way to buy & sell crypto asset exchange.</p>
                <div className='bannerBtnArea'>
                    <Link to={Home} className='bannerBtn'>Başlayın</Link>
                </div>
            </div>
            <div className='bannerRight'>
                <img src={banner} alt="banner" width={500}/>
            </div>
        </div>
    </div>
  )
}

export default Banner