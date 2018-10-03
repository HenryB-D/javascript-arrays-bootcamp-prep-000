var chocolateBars = [
  'snickers',
  'hundred grand',
  'kit kat',
  'skittles'
]
function addElementToBeginningOfArray(chocolateBars, toblerone){
  return [toblerone, ...chocolateBars];
}
function destructivelyAddElementToBeginningOfArray(chocolateBars, toblerone){
  chocolateBars.unshift(toblerone);
  return chocolateBars;
}
function addElementToEndOfArray(chocolateBars, toblerone){
  return [...chocolateBars, toblerone];
}
function destructivelyAddElementToEndOfArray(chocolateBars, toblerone){
  chocolateBars.push(toblerone);
  return chocolateBars;
}
function accessElementInArray (array, index){
 return array [index]; 
}

function destructivelyRemoveElementFromBeginningOfArray (chocolateBars){
  chocolateBars.shift();
  return chocolateBars;
}

function removeElementFromBeginningOfArray (chocolateBars){
  return chocolateBars.slice(1);
}

function destructivelyRemoveElementFromEndOfArray (chocolateBars){
  return chocolateBars.pop();
}
