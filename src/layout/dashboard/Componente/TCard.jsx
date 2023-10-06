import "./Css/TCard.css";
import React, { useEffect, useState } from "react";
function TCard() {
  const [people, setPeople] = useState([]);
  useEffect(() => {
    fetch('http:mongodb://localhost:27017') // Ruta a tu endpoint de obtención de datos
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error))
  }, []);
  return (
    <div>
      <div className="card__container">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
          >
            <div
              style={{ backgroundImage: `url(${person.url})` }}
              className="card"
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default TCard;
