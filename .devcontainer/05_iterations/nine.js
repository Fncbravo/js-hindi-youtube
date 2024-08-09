// Javascript reduce method MDN

const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialvalue = 0;
const sumWithInitial = array1.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialvalue
);

console.log(sumWithInitial);
// Expected output: 10

// ----------------------------------------------------------------------------------------------

const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}` );
    
//     return acc + currval
// }, 0)

// console.log(myTotal);

//  Now same with arrow function

const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)

console.log(myTotal);

const shoppinCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppinCart.reduce( (acc, item) => acc + item.price, 0)

console.log(priceToPay);
