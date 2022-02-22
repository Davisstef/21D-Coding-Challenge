const bookFreePlatform = (platformList, missionDate) => {
  for( let i = 0 ; i < platformList.length ; i++ ) {
    if(platformList[i].bookDate === undefined) {
      platformList[i].bookDate = missionDate;
      break;
    }
  }
  return platformList;
};