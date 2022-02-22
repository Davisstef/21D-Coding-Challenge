const averageWindSpeed = (weatherEntries) => {
  var speed = 0;
  for (let i = 0; i < weatherEntries.length; i++) {
    speed += (weatherEntries[i].windSpeed);
  }
  return (Math.round(speed/weatherEntries.length));
};