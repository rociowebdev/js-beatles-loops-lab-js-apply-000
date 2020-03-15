// add solution here
function theBeatlesPlay(musicians, instruments) {
   musicians = [ ];
   instruments = [ ];
}

function howMany(selectObject) {
  let numberSelected = 0;
  for (let i = 0; i < selectObject.options.length; i++) {
    if (selectObject.options[i].selected) {
      numberSelected++;
    }
  }
  return numberSelected;
}