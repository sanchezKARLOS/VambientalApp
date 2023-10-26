import { useState, useEffect, useCallback, useRef } from "react";
import TinderCard from "react-tinder-card";
import "./Style.css";
import Date from "./date.json";
import axios from "axios";

function VappCard() {
  const [sensors, setSensors] = useState([]);

  useEffect(() => {
    setSensors(Date);
  }, []);

  const swiped = (direction, nameToDelete) => {
    console.log(`removing ${nameToDelete}`);
  };

  const outOfFrame = (name) => {
    console.log(`${name} left the screen`);
  };

  return (
    <div className="tinderCards">
      <div className="tinderCards__cardContainer">
        {sensors.map((person) => (
          <TinderCard
            className="swipe"
            key={person.id}
            preventSwipe={["up", "down"]}
            onSwipe={(dir) => swiped(dir, person.name)}
            onCardLeftScreen={() => outOfFrame(person.name)}
          >
            <div className={`card ${person.color}`}>
              <div className="_infgps">
                <div>
                  <h1 className="_d">{person.dia}</h1>
                </div>
                <div className="_dblok">
                  <span className="_gps">{person.ubicacion}</span>
                  <strong className="_dt">{person.fecha}</strong>
                </div>
              </div>
              <div
                className="_infimg _imgboxs"
                style={{ backgroundImage: `url(${person.img})` }}
              ></div>

              <div className="_inf-d-s">
                <div className="_dinf-t">
                  <div className="_dc-t">
                    <div>
                      <p>{person.name}</p>
                    </div>
                    <div className="_mg-0">
                      <span
                        className={`status ${
                          person.status ? "status-on" : "status-off"
                        }`}
                      >
                        {person.status? "Activo" : "Inactivo"}
                      </span>
                    </div>
                  </div>
                  <div className="_dh3">
                    <h3 className="_ts">
                      {" "}
                      <span>Salon:</span> {person.salon}
                    </h3>
                  </div>
                </div>

                <div className="_dinf-g">
                  <div className="_dctg">
                    {" "}
                    <h1 className="_tg">{person.grado}</h1>
                  </div>
                  <div className="_dcts">
                    {" "}
                    <span className="_ts _spatg">{person.tipoGrado}</span>
                  </div>
                </div>
              </div>

            <div className="_cbtns">
              <div className="_dcdow">
                <button className="_dbtcicle-red">
                  <span>
                    <span>
                    <svg fill="#e4ff14" width="45px" height="45px" viewBox="-4.8 -4.8 41.60 41.60" version="1.1" xmlns="http://www.w3.org/2000/svg" stroke="#e4ff14"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15.977 0c-7.994 0-14.498 6.504-14.498 14.498 0 7.514 5.79 13.798 13.236 14.44l-2.87 1.455c-0.354 0.195-0.566 0.632-0.355 0.977l0.101 0.262c0.211 0.346 0.668 0.468 1.021 0.274l4.791-2.453c0.006-0.004 0.012-0.003 0.019-0.007l0.322-0.176c0.177-0.098 0.295-0.257 0.342-0.434 0.049-0.177 0.027-0.375-0.079-0.547l-0.191-0.313c-0.003-0.006-0.009-0.010-0.012-0.015l-2.959-4.624c-0.21-0.346-0.666-0.468-1.021-0.274l-0.232 0.162c-0.354 0.194-0.378 0.694-0.168 1.038l1.746 2.709c-0.009-0-0.018-0.004-0.027-0.005-6.54-0.429-11.662-5.907-11.662-12.47 0-6.891 5.607-12.498 12.498-12.498 6.892 0 12.53 5.606 12.53 12.498 0 3.968-1.823 7.613-5 9.999-0.442 0.332-0.53 0.959-0.199 1.401 0.332 0.442 0.959 0.531 1.401 0.199 3.686-2.768 5.799-6.996 5.799-11.598-0-7.994-6.536-14.498-14.53-14.498z"></path> </g></svg>
                    </span>
                  </span>
                </button>
              </div>
              
              <div className="_dcplay">
                <button className="_dbtncircle-blue"><span> <span>
                  
                <svg width="45px" height="45px" viewBox="-1.6 -1.6 19.20 19.20" xmlns="http://www.w3.org/2000/svg" fill="#310fdb" stroke="#310fdb" stroke-width="0.304" transform="rotate(0)matrix(1, 0, 0, 1, 0, 0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#392ed6" stroke-width="0.608"> <path d="m 4 2 c 0 -0.265625 0.105469 -0.519531 0.292969 -0.707031 c 0.390625 -0.390625 1.023437 -0.390625 1.414062 0 l 6 6 c 0.1875 0.1875 0.292969 0.441406 0.292969 0.707031 s -0.105469 0.519531 -0.292969 0.707031 l -6 6 c -0.390625 0.390625 -1.023437 0.390625 -1.414062 0 c -0.1875 -0.1875 -0.292969 -0.441406 -0.292969 -0.707031 s 0.105469 -0.519531 0.292969 -0.707031 l 5.292969 -5.292969 l -5.292969 -5.292969 c -0.1875 -0.1875 -0.292969 -0.441406 -0.292969 -0.707031 z m 0 0" fill="#310fdb"></path> </g><g id="SVGRepo_iconCarrier"> <path d="m 4 2 c 0 -0.265625 0.105469 -0.519531 0.292969 -0.707031 c 0.390625 -0.390625 1.023437 -0.390625 1.414062 0 l 6 6 c 0.1875 0.1875 0.292969 0.441406 0.292969 0.707031 s -0.105469 0.519531 -0.292969 0.707031 l -6 6 c -0.390625 0.390625 -1.023437 0.390625 -1.414062 0 c -0.1875 -0.1875 -0.292969 -0.441406 -0.292969 -0.707031 s 0.105469 -0.519531 0.292969 -0.707031 l 5.292969 -5.292969 l -5.292969 -5.292969 c -0.1875 -0.1875 -0.292969 -0.441406 -0.292969 -0.707031 z m 0 0" fill="#310fdb"></path> </g></svg>
                  </span> </span></button>
              </div>
            </div>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default VappCard;
