let priceset1 = [1200, 1500,1800];
let priceset2 = [1100, 1400,1700];

let combinedprices = [...priceset1,...priceset2].sort((a, b)=>a-b);
console.log(combinedprices)