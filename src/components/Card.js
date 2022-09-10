import KatieImage from '../assets/images/katie-zaferes.png';
import CardStar from '../assets/images/star.png';



function Card() {
  return (
    <div className="card-container">
      <img className="card-image" src={KatieImage} alt="card-image" />
      <img className="card-start" src={CardStar} alt="card-star" />
    </div>
  )
}

export default Card