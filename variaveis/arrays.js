let array = [];

array.push(3);
array.push(2);
array.pop(); //2
array.push(2);
array.push(5);
array.shift(); //3
array.unshift(1);
console.log(array); //1, 2, 5

for(let c=0; c<array.length; c++){
    array[c]++;
}
console.log(array); //2, 3, 6
let tem3 = array.includes(3); //true
console.log(array.reverse()); //6, 3, 2