import React from 'react'
import { Link } from 'react-router-dom'
import Home from '../pages/Home'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faUser } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
  return (
    <nav className='navbar container'>
        <Link to={Home}><img src={require('../img/logo.png')} width={"50px"} alt='logo'/></Link>
        <div className='navbar-items-left'>
            <Link to={Home}>Anasayfa</Link>
            <Link to={Home}>Satın Alma</Link>
            <Link to={Home}>Market</Link>
            <Link to={Home}>Blog</Link>
        </div>
        <div className='navbar-items-right'>
            <Link to={Home}><FontAwesomeIcon icon={faBell} /></Link>
            <Link to={Home} className='walletLink'>Cüzdan</Link>
            <Link to={Home} className='profile'><FontAwesomeIcon icon={faUser} /></Link>
        </div>
    </nav>
  )
}

export default Navbar