import photogrid from '../assets/images/photo-grid.png';


function Hero() {
  return (
    <div className="hero-container">
      <div className="hero-image-container">
        <img className="hero-photo-grid" src={photogrid} alt="photo-grid"/>
      </div>
       <div className="hero-text-container">
        <h1 className="hero-title">Online Experiences</h1>
        <p className="hero-description">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
      </div>
    </div>
  )
}

export default Hero;