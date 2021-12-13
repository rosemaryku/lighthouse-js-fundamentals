let moves = ['north', 'north', 'west', 'west', 'north', 'east','north'] 

const finalPosition = function(moves){

  const origin = [0,0]
  for (let move of moves){
    if (move === 'north'){
      origin[1] += 1; 
    } else if (move === 'south'){
      origin[1] -= 1; 
    } else if (move === 'east'){
      origin[0] += 1; 
    } else {
      origin[0] -= 1; 
    }
  }
  return origin; 
}

console.log(finalPosition(moves)); 
