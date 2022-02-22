const parseMissionSummary = (exchanges, missionData) => {
  let transcript = []
  for (let i = 0; i < exchanges.length; i++){
  
  let theMessage = exchanges[i].origin + ": " + exchanges[i].message;
  transcript.push(theMessage);
  }
  endoutput = {transcript, missionData};
  console.log(endoutput);
  return endoutput;
  };