const timeRemaining = (launchDate, missionName, fakeToday) => {
  const today = fakeToday || new Date(); // Do not alter this line!
  
  const date = new Date(launchDate);
  daysRemaining = Math.round((date - today)/(1000 * 60 * 60 * 24));
  console.log(missionName, daysRemaining);
  return {missionName, daysRemaining};
  };