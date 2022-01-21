import React from "react";

function Weather(){
    return (
        <form action="/" method="post">
        <label for="CityInput">City Name:</label>
        <input id="CityInput" type="text" name="CityName" value=""></input>
        <button type="submit" name="submit">Search</button>
  
      </form>
    );
}

export default Weather;