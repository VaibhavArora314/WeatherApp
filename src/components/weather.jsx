import React, { useState } from "react";
import Select from "./select";
import { Country, State } from "country-state-city";
import axios from "axios";
import { toast } from "react-toastify";
import Forecast from "./forecast";

function Weather(props) {
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [forecastData, setForecastData] = useState({});

  const getData = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API_URL}${state},${country}`,
        {
          headers: {
            "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
            "X-RapidAPI-Host": process.env.REACT_APP_API_HOST,
          },
        }
      );
      if (!data.success)
        toast.error(
          "Something unexpected occurred. Try selecting some different location."
        );
      else setForecastData(data);
    } catch (ex) {
      toast.error("Something went wrong. Pls try again later.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!country || !state) {
      toast.warning("Pls select a valid loaction");
      return;
    }
    getData();
  };

  return (
    <div className="container p-2">
      <div className="row my-2">
        <div className="col-6">
          <Select
            options={Country.getAllCountries()}
            fieldForValue="isoCode"
            selectedValue={country}
            setSelected={(c) => {setCountry(c);setState("")}}
            label="country"
          />
        </div>
        <div className="col-6">
          <Select
            disabled={!country}
            fieldForValue="name"
            options={State.getStatesOfCountry(country)}
            selectedValue={state}
            setSelected={setState}
            label="state"
          />
        </div>
      </div>
      <button onClick={handleSubmit} className="btn btn-primary" type="submit">
        Submit
      </button>
      {forecastData.success && <Forecast state={state} forecastData={forecastData} />}
    </div>
  );
}

export default Weather;
