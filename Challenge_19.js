const organizeData = (receivedData) => {
  let astro = [];
  let bio = [];
  let physics = []; 
  
  for (i = 0; i < receivedData.length; i++){
    if (receivedData[i].type == "astro"){
    astro.push(receivedData[i].data);
  } 
  if (receivedData[i].type == "bio"){
  bio.push(receivedData[i].data);
  }
  if (receivedData[i].type == "physics"){
  physics.push(receivedData[i].data);
  }
  }
  let newList = {astro, bio, physics};
  console.log(newList);
  return newList;
  };