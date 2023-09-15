import React, { useState } from "react";

function Character(props) {
  // ❗ Add the props

  // ❗ Create a state to hold whether the homeworld is rendering or not
  // ❗ Create a "toggle" click handler to show or remove the homeworld
  const [isOn, setIsOn] = useState(false);

  function returnPlanet(hw) {
    return props.planets.map((planet) => {
      if (planet.id === hw) {
        return planet.name;
      }
    });
  }
  const toggle = () => {
    setIsOn(!isOn);
  };

  return (
    <div className="character-card">
      <h3 onClick={() => toggle()} className="character-name">
        {props.people.name}
      </h3>
      {/* Use the same markup with the same attributes as in the mock */}
      {isOn ? (
        <p>
          Planet:{" "}
          {
            <span className="character-planet">
              {" "}
              {returnPlanet(props.people.homeworld)}
            </span>
          }
        </p>
      ) : (
        ""
      )}
    </div>
  );
}

export default Character;
