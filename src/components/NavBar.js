import logo from '../assets/images/airbnb-logo.png';

function NavBar() {
  return (
    <nav className="navbar">
      <img className='navbar-logo' src={logo} alt="logo"/>
    </nav>
  )
}

export default NavBar