'use strict';

// /*
// function percentageOfWorld1(population){
//     return (population/7900)*100;
// }

// const percentageOfWorld2 = function(population){
//     return (population/7900)*100;
    
// } 

// const percentageOfWorld3 = (population)=>{
//     return (population/7900)*100;

// }

// function describlePopulation(country, population){
//     return `${country} has ${population} million people, which is about ${percentageOfWorld1(population)}% of the world.`;
// }
// console.log(describlePopulation("India", 5000));
// console.log(describlePopulation("China", 500));
// console.log(describlePopulation("Iraq", 50));

// // const output1 = percentageOfWorld1(5000);
// // const output2 = percentageOfWorld1(500);
// // const output3 = percentageOfWorld1(50);
// // console.log(output1, output2, output3);

// // const output_1 = percentageOfWorld2(5000);
// // const output_2 = percentageOfWorld2(500);
// // const output_3 = percentageOfWorld2(50);
// // console.log(output_1, output_2, output_3);

// // const output__1 = percentageOfWorld3(5000);
// // const output__2 = percentageOfWorld3(500);
// // const output__3 = percentageOfWorld3(50);
// // console.log(output__1, output__2, output__3);
// */

const populations = [100, 200, 300, 400];
// console.log(populations.length == 4 ? true : false);

function percentageOfWorld(population){
    return (population/7900)*100;
}
const percentages=[percentageOfWorld(populations[0]), percentageOfWorld(populations[1]), percentageOfWorld(populations[2]), percentageOfWorld(populations[3])];
console.log(percentages);

// const neighboursOfIndia = ['Pakistan', 'China', 'Sri Lanka', 'Nepal', 'Bhutan', 'Bangladesh', 'Myanmaar'];
// // console.log(neighboursOfIndia);
// //adding new neighbour
// neighboursOfIndia.push('Utopia');
// // console.log(neighboursOfIndia);
// // now removing it
// neighboursOfIndia.pop();
// // console.log(neighboursOfIndia);

// // if(neighboursOfIndia.includes('Pakistan')){
// //     console.log('Probably not a central Eupopean country :D');
// // }
// neighboursOfIndia[neighboursOfIndia.indexOf('China')]='Republic of China';
// // console.log(neighboursOfIndia);





const myIndia ={
    country: "India",
    capital: "Delhi",
    language: "Hindi",
    populationInMillions: 1410,
    populations : [100, 200, 300, 400],
    neighbours: ['Pakistan', 'China', 'Sri Lanka', 'Nepal', 'Bhutan', 'Bangladesh', 'Myanmaar'],
    describe: function(){
        let output = `${this.country} has ${this.populationInMillions} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital} and is ${this.isIsland?'not an':'an'} island`;

        return output;
    },
    
    checkIsland: function(){
        this.isIsland = (this.neighbours.length>=1)?true:false;
    },

    elections: function(){
        let i;
        for(i=1; i<=50; i++){
            console.log(`Voter number ${i} is currently voting`);
        }
    },

    computePercentageOfWorld: function(){
        let i;
        let data=[];
        i = 0;
        while(i<this.populations.length){      
           data.push((this.populations[i]/7900)*100);
           i++;
        }
        return data;
    }

}



console.log(myIndia.computePercentageOfWorld());


let listOfNeighbours = [
    ['Canda', 'Mexico'],
    ['spain'],
    ['Norway', 'Sweden', 'Russia']
];

console.log(listOfNeighbours);
let i, j;
i=0;

while(i<listOfNeighbours.length){
    j=0;
    while(j<listOfNeighbours[i].length){
        console.log("Neighbour:" + listOfNeighbours[i][j]);
        j++;
    }
    i++;
}