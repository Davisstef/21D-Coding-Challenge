const switchSpecificToggle = (toggleList, specificToggle) => {
  for (let i = 0; i < toggleList.length; i++) {
    if (toggleList[i].name === specificToggle)
    toggleList[i].isOn = !toggleList[i].isOn;
  }
  return toggleList;
};
