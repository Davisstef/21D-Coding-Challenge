const getAverageSpeed = (firstPosition, secondPosition) => {
  let avgTime = secondPosition.time - firstPosition.time;
  let avgSpeed = secondPosition.altitude - firstPosition.altitude;
  
  let speed = (avgSpeed / avgTime);
  return Math.round(speed * 10) / 10;
};