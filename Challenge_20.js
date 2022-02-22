const confirmReentryPlans = (speed, missionData, checks) => {
  if (speed < checks.maxSpeed && speed > checks.minSpeed) {
    const types = Object.keys(missionData);
    for (let type of types) {
      if (missionData[type].length != checks.dataEntries[type]) {
        return false;
      }
    }
    return true;
  }
  return false;
};