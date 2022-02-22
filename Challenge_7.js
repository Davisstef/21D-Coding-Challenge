const storeWeatherConditions = (temperature, condition, windSpeed, windDirection) => { 
  
  let storeWeatherConditions = {temperature, condition, windSpeed, windDirection}
  storeWeatherConditions.temperature = Math.round((storeWeatherConditions.temperature - 32) * 5/9)
  storeWeatherConditions.windSpeed = Math.round(storeWeatherConditions.windSpeed/2.237)
  
  return storeWeatherConditions;
  }