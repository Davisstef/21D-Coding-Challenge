const listAstronautJobs = (roster) => {
  let list = [];
  for (let i = 0; i < roster.length; i ++){
    list.push(roster[i].job);
  }
  return (list);
  };