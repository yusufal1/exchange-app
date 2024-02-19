import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faUser } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
  return (
    <nav className='navbar container'>
        <Link to='/'><img src={require('../img/logo.png')} width={"50px"} alt='logo'/></Link>
        <div className='navbar-items-left'>
            <Link to='/'>Anasayfa</Link>
            <Link to='/'>Satın Alma</Link>
            <Link to='/'>Market</Link>
            <Link to='/'>Blog</Link>
        </div>
        <div className='navbar-items-right'>
            <Link to='/'><FontAwesomeIcon icon={faBell} /></Link>
            <Link to='/cuzdan' className='walletLink'>Cüzdan</Link>
            <Link to='/' className='profile'><FontAwesomeIcon icon={faUser} /></Link>
        </div>
    </nav>
  )
}

export default Navbar