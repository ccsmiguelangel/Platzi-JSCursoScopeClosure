function greeting(){
  let userName = 'Anna';
  console.log(userName);

  if(userName === 'Anna'){
    console.log(`Hello ${userName}`);
  }
  // userName is funtion Scope
}

greeting();
console.log(userName); // userName it's not global, It's function Scope