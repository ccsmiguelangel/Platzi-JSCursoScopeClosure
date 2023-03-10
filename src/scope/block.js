// emcs 6 block scope

function fruits(){
  // {} Todo lo que está dentro de handlevar son bloques
  if(true){
    var fruit1 = 'Apple'; // funtion scope
    let fruit2 = 'Kiwi'; // block scope
    const fruit3 = 'Banana'; // block scope
  }
  console.log(fruit1);
  // console.log(fruit2);
  // console.log(fruit3);
}
fruits();