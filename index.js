'use strict';
console.clear();

// call and apply methods
let investmentInPreciousMetals={
  investments: {
    gold: 'Gold (MMTC Pamp 24 Caret)',
    silver: 'Silver (MMTC Pamp 999.9)'
  },  
  invest(rupees, investIn){        
    return `Investing ${rupees} into ${this.investments?.[investIn] ??  `ERROR: Invalid investment type '${investIn}'`}`;
  }
};
let investmentInStockMarket = {
  investments: {
    nifty50: 'Nifty 50',
    bankNifty: 'BankNifty',
    liquidBees: 'LiquidBees',
    bharatBond: 'Bharat Bond'
  }
}

// console.log(investmentInPreciousMetals.invest(`₹1 Lakh`));
let copyOfInvest = investmentInPreciousMetals.invest;

// copyOfInvest(`₹1 lakh`); // Will result in TypeError undefiend while reading 'investment'

// Now using call mehtod
  console.log(copyOfInvest.call(investmentInPreciousMetals, `₹1 Lakh`, `silver`));
  console.log(copyOfInvest.call(investmentInStockMarket, `₹1 Lakh`, `nifty50`));
  console.log(copyOfInvest.call(investmentInPreciousMetals, `₹1 Lakh`, `Land`));
  console.log(copyOfInvest.call(investmentInStockMarket, `₹1 Lakh`, `crypto`));

// Now using apply method | (OLD WAY)
  console.log('\nUsing Apply Method');
  console.log(copyOfInvest.apply(investmentInPreciousMetals, [`₹1 Lakh`, `silver`]));
  console.log(copyOfInvest.apply(investmentInPreciousMetals, [`₹1 Lakh`, `Land`]));
  console.log(copyOfInvest.apply(investmentInStockMarket, [`₹1 Lakh`, `nifty50`]));
  console.log(copyOfInvest.apply(investmentInStockMarket, [`₹1 Lakh`, `bankNifty`]));

// I can achieve same thing using call method as 
console.log('\nUsing call Method with spread operator equilvalent to apply method');
console.log(copyOfInvest.call(investmentInPreciousMetals, ...[`₹1 Lakh`, `silver`]));
console.log(copyOfInvest.call(investmentInPreciousMetals, ...[`₹1 Lakh`, `Land`]));
console.log(copyOfInvest.call(investmentInStockMarket, ...[`₹1 Lakh`, `nifty50`]));
console.log(copyOfInvest.call(investmentInStockMarket, ...[`₹1 Lakh`, `bankNifty`]));


// // function returning function
// let invest = (investment='Gold 24Caret MMTC Pamp')=>{
//   return (rupees)=>{
//     return `investing ${rupees} in ${investment}`;
//   }
// };

// let investInGold = invest();
// console.log(investInGold('₹1 Lakh'));

// let investInShareMarket = invest('Nifty 50');
// console.log(investInShareMarket('₹1 Lakh'));


// let visionBoard =['gold (40kg)', 'silver (1kg)', 'EF (₹50 Lakhs)', 'Rental Income (₹1 Lakh/month)', 'Dividend Income from stock market ($1 Lakh/month)'];
// visionBoard.forEach((item)=>{
//   console.log(item);
// });

// // function temp(){

// // }
// // function testing(fn){
// //   console.log(`calling fxn: ${fn.name}`);
// // }
// // testing(temp);