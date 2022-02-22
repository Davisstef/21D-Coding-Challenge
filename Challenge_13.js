const checkAllGauges = (gaugeList) => {
  let gaugeCheck = true;
  for (let i = 0; i < gaugeList.length; i++) {
    if(gaugeList[i].current < gaugeList[i].min || gaugeList[i].current > gaugeList[i].max){
      gaugeCheck = false;
    }
  //gaugeCheck = true;
  }
return gaugeCheck;
} 
console.log(checkAllGauges);