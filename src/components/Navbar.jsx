import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faUser } from '@fortawesome/free-solid-svg-icons';


const Navbar = () => {

  return (
    <nav className='navbar container'>
        <NavLink to='/'><img src={require('../img/logo.png')} width={"50px"} alt='logo'/></NavLink>
        <div className='navbar-items-left'>
            <NavLink to='/'>Anasayfa</NavLink>
            <NavLink to='/satinalma'>Satın Alma</NavLink>
            <NavLink to='/'>Market</NavLink>
            <NavLink to='/'>Blog</NavLink>
        </div>
        <div className='navbar-items-right'>
            <NavLink to='/'><FontAwesomeIcon icon={faBell} /></NavLink>
            <NavLink to='/cuzdan' className='walletLink'>Cüzdan</NavLink>
            <NavLink to='/' className='profile'><FontAwesomeIcon icon={faUser} /></NavLink>
        </div>
    </nav>
  )
}

export default Navbar