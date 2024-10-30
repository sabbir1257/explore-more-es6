const products = [
     { id: 1, name: 'lenovo', price: 65000 },
     { id: 2, name: 'Dell', price: 45000 },
     { id: 3, name: 'Hp', price: 40000 },
     { id: 4, name: 'Mac', price: 150000 },
];


// map
const names = products.map(product => product.name);
// console.log(names);
const prices = products.map(p => p.price);
// console.log(prices);


// forEach 
products.forEach(p=> console.log(p.id))

// filter
const expensive = products.filter(p=> p.price > 50000);
console.log(expensive);
