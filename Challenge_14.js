const switchAllTogglesOn = (toggleList) => {
  for (let i = 0; i < toggleList.length; i++){
  toggleList[i].isOn = true;
  }
  return toggleList
  }