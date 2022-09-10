import photogrid from '../assets/images/photo-grid.png';


function Hero() {
  return (
    <div className="hero-container">
      <img className="hero-photo-grid" src={photogrid} alt="photo-grid"/>
      <h1 className="hero-title">Online Experiences</h1>
      <p className="hero-description">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
    </div>
  )
}

export default Hero;