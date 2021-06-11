// FORK this starter file and save it to your own Repl.it account.


// Declare and initialize the 12 variables here:
let date = "Monday 2019-030-18";
let time = "10:05:34 AM";
const readlineSync = require("readline-sync");
let astronautCount = readlineSync.question("astronaut count:");
let astronautStatus = "ready";
let averageAstronautMassKg = 80.7;
const crewMassKg = astronautCount * averageAstronautMassKg;
let fuelMassKg = 706000;
const shuttleMassKg = 74842.31;
const totalMassKg = crewMassKg + fuelMassKg + shuttleMassKg;
let fuelTempC = "-225";
let fuelLevel = "100%";
let weatherStatus = "clear";
const lineBreak = "-------------------------";

// Write code to generate the LC04 report here:
console.log (lineBreak); 
console.log ("> LC04 - Launch Checklist");
console.log (lineBreak); 
console.log (date);
console.log (time);
console.log (lineBreak); 
console.log ("> ASTRONAUT INFO");
console.log (lineBreak); 
console.log ("* count " + astronautCount)
console.log ("* status " + astronautStatus)
console.log (lineBreak); 
console.log ("FUEL DATA")
console.log (lineBreak); 
console.log ("* Fuel temp celsius: " + fuelTempC);
console.log ("* Fuel level: " + fuelLevel);
console.log (lineBreak); 
console.log ("> MASS DATA");
console.log (lineBreak);
console.log ("*Crew mass: " + crewMassKg);
console.log ("*Fuel mass: " + fuelMassKg);
console.log ("*Shuttle mass: " + shuttleMassKg)
console.log ("Total mass: " + totalMassKg);
console.log (lineBreak);
console.log ("> FLIGHT PLAN");
console.log (lineBreak); 
console.log ("weather: " + weatherStatus);
console.log (lineBreak); 
console.log (">OVERALL STATUS");
console.log (lineBreak); 
console.log ("clear for takeoff");
console.log (lineBreak); 
console.log (lineBreak); 
// When done, have your TA check your code.




// BONUS: Use readline-sync to prompt the user to enter the number of astronauts going on the mission.