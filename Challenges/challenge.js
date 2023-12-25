"use strict";
console.clear();




// /*** 
//  * CODING CHALLENGE #9
//  */
// const poll = {
//   question: "What is your favourite programming language?",
//   options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
//   // This generates [0, 0, 0, 0]. More in the next section!
//   answers: new Array(4).fill(0),
//   registerNewAnswer(){
//     // 1. taking input from user      
//       let response = prompt(
//       `${this.question}\n${this.options.join('\n')}\n(Write option number)`
//       );
  
//     // 2. is response valid?
//       response = Number(response);
//       if(response >=0 && response <=3){
//         this.answers[response] += 1;
//         displayResultsBindToPoll();      
//       }else{
//         alert('wrong choice!');
//       }
        
//   }
// };


// // attaching click eveent listener to button
//   let btn = document.getElementById('answerPoll');
//   btn.addEventListener('click', poll.registerNewAnswer.bind(poll));

// // Creating displayResults to display poll results
//   let displayResults = function(type='array'){
//     if(this.answers[0].length){
//       // console.log(this.answers);
//       for(let answer of this.answers){
//         if(type === 'string'){
//           console.log(`Poll results are ` + answer.join());      
//         }else{
//           console.log(answer);
//         }
//       }
//     }else{
//       if(type === 'string'){
//         console.log(`Poll results are ` + this.answers.join());      
//       }else{
//         console.log(this.answers);
//       }
//     }

//   }
//   let displayResultsBindToPoll = displayResults.bind(poll);
  
  
  
//   let testData ={
//     answers: [
//       [5, 2, 3],
//       [1, 5, 3, 9, 6, 1],
//     ],    
//   };

  

//   let displayResultsBindToTestData = displayResults.bind(testData);
//   displayResultsBindToTestData();
//   displayResultsBindToTestData('string');

// let displayResultsWithTestData = displayResults.bind(poll,  testData)

// // /***
// //  * CODING CHALLENGE #8
// //  */
// let data = document.createElement('textarea');
// document.body.append(data);
// data.value=
// `underscore_case  
//    first_name
// Some_Variable
//    calculate_AGE  
// delayed_departure`;
// let btn = document.createElement('button');
// document.body.append(btn);

// window.addEventListener('load', function(){
//   let lineNo=1;
//   for(let line of data.value.split('\n')){
    
//     // removing whitespace from beginning and ending
//     // converting all to lowercase
//       line = line.trim().toLowerCase();
//     // converting to camel case 
//       let separatedWords = line.split('_');
//       // console.log(separatedWords);
//       for(let idx=0; idx<separatedWords.length; idx++){
//         let word = separatedWords[idx];
//         // console.log(word);
//         if(idx>0){          
//           word = word[0].toUpperCase() + word.slice(1);
//         }
//         separatedWords[idx] = word;
//       }
//       separatedWords = separatedWords.join('');
//       separatedWords = `${separatedWords.padEnd(20)} ${'🍇'.repeat(lineNo)} `;      
//       console.log(separatedWords);

//       ++lineNo;
//   }


// })


// /***
//  * CODING CHALLENGE #7
//  */
// const gameEvents = new Map([
//   [17, '⚽ GOAL'],
//   [36, '🔁 Substitution'],
//   [47, '⚽ GOAL'],
//   [61, '🔁 Substitution'],
//   [64, '🔶 Yellow card'],
//   [69, '🔴 Red card'],
//   [70, '🔁 Substitution'],
//   [72, '🔁 Substitution'],
//   [76, '⚽ GOAL'],
//   [80, '⚽ GOAL'],
//   [92, '🔶 Yellow card'],
// ]);

// // 1. Create an array 'events' of the different game events that happened (no
// //   duplicates)
// let events = [ ...(new Set(gameEvents.values()))];
// console.log(events);

// // 2. After the game has finished, is was found that the yellow card from minute 64
// // was unfair. So remove this event from the game events log.
// gameEvents.delete(64);
// console.log(gameEvents);

// // 3. Compute and log the following string to the console: "An event happened, on
// // average, every 9 minutes" (keep in mind that a game has 90 minutes)
// let avg=0;
// let gameEventsKeys = [...gameEvents.keys()];
// avg = (gameEventsKeys[gameEventsKeys.length-1]-gameEventsKeys[0])/(gameEventsKeys.length);
// let msg=`An event happened, on average, every ${avg} minutes`;
// console.log(msg);

// // 4. Loop over 'gameEvents' and log each element to the console, marking
// // whether it's in the first half or second half (after 45 min) of the game, like this:
// // [FIRST HALF] 17:
// // ⚽
// // GOAL
// for(let [key,value] of gameEvents){  
//   let whichHalf = key>45?'SECOND':'FIRST';
//   console.log(`[${whichHalf} HALF] ${key}: ${value}`)
// }


// /*** 
//  * CODING CHALLENGE #6
//  */
// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//   ['Neuer',
//   'Pavard',
//   'Martinez',
//   'Alaba',
//   'Davies',
//   'Kimmich',
//   'Goretzka',
//   'Coman',
//   'Muller',
//   'Gnarby',
//   'Lewandowski',],
//   ['Burki',
//   'Schulz',
//   'Hummels',
//   'Akanji',
//   'Hakimi',
//   'Weigl',
//   'Witsel',
//   'Hazard',
//   'Brandt',
//   'Sancho',
//   'Gotze',],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski',  'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//     },
// };
// // console.log(game);

// // 1. Loop over the game.scored array and print each player name to the console,
// // along with the goal number (Example: "Goal 1: Lewandowski")
//   for(let [idx, playerName] of game.scored.entries()){
//     console.log(`Goal ${idx+1}: ${playerName}`);
//   }


// // 2. Use a loop to calculate the average odd and log it to the console (We already
// // studied how to calculate averages, you can go check if you don't remember)
// let odds = Object.values(game.odds);
// // console.log(odds);
// let sum=0;
//   for(let odd of odds){
//     sum+=odd;
//   }
//   console.log(sum/odds.length);

// // 3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
// // Odd of victory Bayern Munich: 1.33
// // Odd of draw: 3.25
// // Odd of victory Borrussia Dortmund: 6.5
// // Get the team names directly from the game object, don't hardcode them
// // (except for "draw"). Hint: Note how the odds and the game objects have the
// // same property names 😉
// for(let [key, value] of Object.entries(game.odds)){  
//   console.log(`Odd of ${(game[key]? ('victory ' + game[key]): undefined) ?? 'draw'}: ${value}`);
// }

// // 4. Bonus: Create an object called 'scorers' which contains the names of the
// // players who scored as properties, and the number of goals as the value. In this
// // game, it will look like this:
// // {
// // Gnarby: 1,
// // Hummels: 1,
// // Lewandowski: 2
// // }

// const scorers ={

// };
// // iterate over it and store in hash map
// for(let playerName of game.scored){
//   // console.log(playerName);  
//   // does object having this player name?
//     if(scorers[playerName]){
//       scorers[playerName]++;
//     }else{
//       scorers[playerName] = 1;
//     }
// }
// console.log(scorers);


// /***
//  * CODING CHALLENGE #5
//  */ 
// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     ['Neuer',
//     'Pavard',
//     'Martinez',
//     'Alaba',
//     'Davies',
//     'Kimmich',
//     'Goretzka',
//     'Coman',
//     'Muller',
//     'Gnarby',
//     'Lewandowski',],
//     ['Burki',
//     'Schulz',
//     'Hummels',
//     'Akanji',
//     'Hakimi',
//     'Weigl',
//     'Witsel',
//     'Hazard',
//     'Brandt',
//     'Sancho',
//     'Gotze',],
//   ],
//   score: '4:0',
//   scored: [
//     'Lewandowski', 'Gnarby', 'Lewandowski','Hummels'
//   ],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// // 1. Create one player array for each team (variables 'players1' and 'players2')
// // let players1 = game.players[0];
// // let players2 = game.players[1];
// // i can also use destructuring for the same
// let [players1, players2] = game.players;
// console.log(players1, players2);


// // 2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
// let [gk, ...fieldPlayers] = players1; 
// console.log(gk, fieldPlayers);

// // 3. Create an array 'allPlayers' containing all players of both teams (22 players)
// let [...allPlayers] = [...players1, ...players2];
// console.log(allPlayers);

// // 4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
// let [...players1Final] = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
// console.log(players1Final);

// // 5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
// let {team1, x:draw, team2} = game.odds;
// console.log(team1, draw, team2);

// // 6. Write a function ('printGoals') that receives an arbitrary number of player names (not an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
// game.printGoals = function(...playersNames){
// console.log(playersNames.length + " goals were scored!")
// }
// game.printGoals('apple', 'orange', 'grapes','mango');

// // 7. The team with the lower odd is more likely to win. Print to the console which team is more
// // console.log(team1 && team2);
// team1 > team2 && console.log('team#2 is likely to be win!');
// team1 < team2 && console.log('team#1 is likely to be win!');



// /***
//  * Coding Challenge #4
//  */
// const billValues = [22, 295, 176, 440, 37, 105, 10, 1100, 86 , 52];
// const tipValues = [];
// function calTip(billValue){
//   return billValue >= 50 && billValue <= 300 ? 0.15 * billValue : 0.2 * billValue;
// }
// for(let billValue of billValues){
//   tipValues.push(calTip(billValue));
// }

// const totals = [];c
// let idx=0;

// for(idx=0; idx<billValues.length; idx++){
//   let total=billValues[idx] + tipValues[idx];
//   totals.push(total)
// }

// console.log(billValues);
// console.log(tipValues);
// console.log(totals);




// //
// // Coding Challege #3
// //

// class Person{    
//   constructor(firstName, lastName, mass, height){
//     this.firstName=firstName;
//     this.lastName=lastName;
//     this.mass=mass;
//     this.height=height;
//     this.calcBMI();
//   }
//   calcBMI(){
//     this.BMI= this.mass / (this.height ** 2);    
//   }
// };
// let objJohn = new Person('John', 'Smith', 92, 1.95);
// let objMark = new Person('Mark', 'Miller', 78, 1.69);
// console.log(objJohn.BMI);

// let markMiller={
//   firstName: "Mark",
//   lastName: 'Miller',
//   mass: 78,
//   height: 1.69,
//   calcBMI: function(){
//     // console.log(`${this.mass} ${this.height}`)
//     this.BMI= this.mass / (this.height ** 2);    
//   }
// };

// let johnSmith={
//   firstName: "John",
//   lastName: 'Smith',
//   mass: 92,
//   height: 1.95,
//   calcBMI: function(){
//     this.BMI= this.mass / (this.height ** 2);        
//   }
// };
// markMiller.calcBMI();
// // johnSmith.calcBMI();
// let bmiMark = objMark.BMI;
// let bmiJohn = objJohn.BMI;

// // console.log(bmiMark + " " + bmiJohn);

//   if(bmiMark > bmiJohn){
//     console.log(`Mark's BMI ${bmiMark} is higher than John's ${bmiJohn}`);
//   }else{
//     console.log(`John's BMI ${bmiJohn} is higher than Marks's ${bmiMark}`);
//   }



// /***
//  * Coding Challenge #2
//  */
// function calTip(billValue){
//   return billValue >= 50 && billValue <= 300 ? 0.15 * billValue : 0.2 * billValue;
// }
// const tipValues = [];
// const billValues = [125, 555, 44];
// for(let billValue of billValues){
//   tipValues.push(calTip(billValue));
// }

// const totals = [];

// let idx=0;

// for(idx=0; idx<billValues.length; idx++){
//   let total=billValues[idx] + tipValues[idx];
//   totals.push(total)
// }

// console.log(billValues);
// console.log(tipValues);
// console.log(totals);


// /***
//  * Coding Challenge #1
//  */
//   let calcAverage =  (scores)=>{
//     let sum=0;
//     for(let score of scores){
//       sum+=score;
//     }
//     return sum/scores.length;
//   }
//   function checkWinner(avgDolhins, avgKoalas){
//     let msg;
//     if(avgDolhins >= 2*avgKoalas){
//       msg=`Dolphins win (${avgDolhins} vs. ${avgKoalas})`;
//     }else if(avgKoalas >= 2*avgDolhins){
//       msg=`Koalas win (${avgKoalas} vs. ${avgDolhins})`;
//     }else{
//       msg=`no team wins!`
//     }
//     return msg;
//   }

//   function whoIsTheWinner(scoresTeamDolphins, scoresTeamKoalas){
//     let avgScoreTeamDolphins, avgScoreTeamKoalas;
//     avgScoreTeamDolphins = calcAverage(scoresTeamDolphins);
//     avgScoreTeamKoalas = calcAverage(scoresTeamKoalas);

//     console.log(avgScoreTeamDolphins +" " + avgScoreTeamKoalas);
//     return checkWinner(avgScoreTeamDolphins, avgScoreTeamKoalas);
//   }

//   let scoresTeamDolphins=[44, 23, 71];
//   let scoresTeamKoalas=[65, 54, 49];

//   // #1 Computing Avg Scores
//     console.log(whoIsTheWinner(scoresTeamDolphins, scoresTeamKoalas));

//   // #2 Comparing scores to determine winners
//     scoresTeamDolphins=[85, 54, 41];
//     scoresTeamKoalas=[23, 34, 27];
//     console.log(whoIsTheWinner(scoresTeamDolphins, scoresTeamKoalas));




// /***
//  * Coding Challenge #4
//  */
// function computeTipsAndLogToConsole(billValues) {
//   let tip;
//   for (let billValue of billValues) {
//     tip = billValue >= 50 && billValue <= 300 ? 0.15 * billValue : 0.2 * billValue;
//     console.log(`The bill was ${billValue}, the tip was ${tip}, and the total value ${billValue + tip}`);
//   }
// }
// const billValues = [275, 40, 430];
// computeTipsAndLogToConsole(billValues);

// /***
//  * Coding Challenge #3
//  */
//   function computeAvgScore(scores){
//     let sum=0;
//     for(let score of scores){
//       sum+=score;
//     }
//     return sum/scores.length;
//   }
//   function whoIsTheWinner(scoresTeamDolphins, scoresTeamKoalas){
//     let avgScoreTeamDolphins, avgScoreTeamKoalas;
//     avgScoreTeamDolphins = computeAvgScore(scoresTeamDolphins);
//     avgScoreTeamKoalas = computeAvgScore(scoresTeamKoalas);

//     console.log(avgScoreTeamDolphins +" " + avgScoreTeamKoalas);
//     if((avgScoreTeamDolphins > avgScoreTeamKoalas) && (avgScoreTeamDolphins>=100)){
//      return "Dolphins Wins!";
//     }else if((avgScoreTeamKoalas > avgScoreTeamDolphins) && (avgScoreTeamKoalas>=100)){
//       return "Koalas Wins!";
//     }else if((avgScoreTeamDolphins==avgScoreTeamKoalas) && (avgScoreTeamDolphins>=100)){
//       return "Draw!";
//     }else{
//       return "No team wins the trophy!";
//     }
//   }

//   let scoresTeamDolphins=[96, 108, 89];
//   let scoresTeamKoalas=[88, 91, 110];

//   // #1 Computing Avg Scores
//     console.log(whoIsTheWinner(scoresTeamDolphins, scoresTeamKoalas));

//   // #2 Comparing scores to determine winners
//     scoresTeamDolphins=[97, 112, 101];
//     scoresTeamKoalas=[109, 95, 123];
//     console.log(whoIsTheWinner(scoresTeamDolphins, scoresTeamKoalas));

//     scoresTeamDolphins=[97, 112, 101];
//     scoresTeamKoalas=[109, 95, 106];
//     console.log(whoIsTheWinner(scoresTeamDolphins, scoresTeamKoalas));

// //
// // Coding Challege #2
// //
// function computeBMI(mass, height){
//   return mass / (height ** 2);
// }
// function whoseBmiIsHigher(bmiMark, bmiJohn){
//   if(bmiMark > bmiJohn){
//     return `Mark's BMI ${bmiMark} is higher than John's ${bmiJohn}`;
//   }else{
//     return `John's BMI ${bmiJohn} is higher than Marks's ${bmiMark}`;
//   }
// }

// // Dataset One
// let markWeight = 78, markHeight = 1.69;
// let johnWeight = 92, johnHeight = 1.95;
// let bmiMark, bmiJohn;
// bmiMark = computeBMI(markWeight, markHeight), bmiJohn = computeBMI(johnWeight, johnHeight);
// console.log(whoseBmiIsHigher(bmiMark, bmiJohn));

// // Dataset #2
// markWeight = 95, markHeight = 1.88;
// johnWeight = 85, johnHeight = 1.76;
// bmiMark = computeBMI(markWeight, markHeight), bmiJohn = computeBMI(johnWeight, johnHeight);
// console.log(whoseBmiIsHigher(bmiMark, bmiJohn));

// //
// // Coding Challege #1
// //
// function computeBMI(mass, height){
//   return mass / (height ** 2);
// }

// // Dataset One
// let markWeight = 78, markHeight = 1.69;
// let johnWeight = 92, johnHeight = 1.95;
// let markHigherBMI;
// markHigherBMI = computeBMI(markWeight, markHeight) > computeBMI(johnWeight, johnHeight) ? true : false;
// console.log(markHigherBMI);

// // Dataset #2
// markWeight = 95, markHeight = 1.88;
// johnWeight = 85, johnHeight = 1.76;
// markHigherBMI = computeBMI(markWeight, markHeight) > computeBMI(johnWeight, johnHeight) ? true : false;
// console.log(markHigherBMI);
