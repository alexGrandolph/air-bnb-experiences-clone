import KatieImage from '../assets/images/katie-zaferes.png';
import CardStar from '../assets/images/star.png';



function Card() {
  return (
    <div className="card-container">
      <img className="card-image" src={KatieImage} alt="card-image" />
      <div className="card-stats">
        <img className="card-star" src={CardStar} alt="card-star" />
        <span>5.0 </span>
        <span className="gray">(6) • </span>
        <span className="gray">USA</span>
      </div>
      <p>Life lessons with Katie Zaferes</p>
      <p><span className="bold">From $136 </span>/ person</p>
    </div>
  )
}

export default Card