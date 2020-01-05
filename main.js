let raceNumber = Math.floor(Math.random() * 1000);
let isEarly = true;
let age = 18;
if(isEarly && age > 18)raceNumber += 1000;
if(age > 18 && isEarly){
  console.log(`You will race at 9:30AM, and your race number is ${raceNumber}.`);
}else if(age > 18 && !isEarly){
  console.log(`You will race at 11:00AM and your number is ${raceNumber}`);
}else if(age < 18){
  console.log(`You will race at 12:30PM, and are number ${raceNumber}`);
}else{
  console.log("Go see the registration desk");
}