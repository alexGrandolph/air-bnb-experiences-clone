import CardStar from '../assets/images/star.png';
import cardData from '../data/cards.json';

function Card() {



const renderCards = (cards) => {
  return (
    <div className = "cards-list">
      {
        cards.map((card) => {
          return (
          <div className="card-container">
              <img className="card-image" src={`${card.image}`} alt="card-image" />
            <div className="card-stats">
              <img className="card-star" src={CardStar} alt="card-star" />
              <span>{card.stars}</span>
              <span className="gray">{card.ratings} • </span>
              <span className="gray">{card.location}</span>
            </div>
            <p>{card.description}</p>
            <p><span className="bold">{card.price} </span>/ {card.perPerson}</p>
          </div>
          )
        })
      }

    </div>
  );
    }
  return (
    <div>
      <div>{renderCards(cardData.cards)}</div>
    </div>
  )
}

export default Card