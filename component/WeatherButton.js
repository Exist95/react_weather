import React, { useState } from "react";
import { Button } from "react-bootstrap";

const WeatherButton = ({ cities, setCity }) => {
  return (
    <div>
      <button className="button">
        <Button variant="warning">Current Location</Button>
        {cities.map((item, index) => (
          <Button variant="warning" key={index} onClick={() => setCity(item)}>
            {item}
          </Button>
        ))}
      </button>
    </div>
  );
};

export default WeatherButton;
