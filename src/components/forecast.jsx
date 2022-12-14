import React from "react";
import { Country } from "country-state-city";

function Forecast({ forecastData,state }) {
  const response = forecastData.response[0];

  return (
    <div className="container text-center">
      <h4>{`${state},${
        Country.getCountryByCode(response.place.country?.toUpperCase()).name
      }`}</h4>
      <h5>
        Longitude: {response.loc.long}, Latitude: {response.loc.lat}
      </h5>
      <div className="row">
        {response.periods?.map((period, index) => {const d = new Date(period.validTime); return (
          <div
            key={index}
            className="col-3 bg-light border border-white rounded-3 m-0 p-2"
          >
            <h6>
              {d.toUTCString().slice(0,-12)}
            </h6>
            <p>{period.weather}</p>
            <p>
              Max Temp: {period.maxTempC}C/{period.maxTempF}F{" "}
            </p>
            <p>
              Min Temp: {period.minTempC}C/{period.minTempF}F
            </p>
            <p>Humidity: {(period.maxHumidity + period.minHumidity) / 2}</p>
            {period.uvi !== null && <p>UV index: {period.uvi}</p>}
          </div>
        )})}
      </div>
    </div>
  );
}

export default Forecast;
