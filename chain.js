// data access 
const data = [{ id: 1, name: 'Sakib', address: 'Mirpur' }];
// console.log(data[0].address);

const products = {
     count: 5000,
     data: [
          { id: 1, name: 'lenovo laptop', price: 65000 },
          { id: 2, name: 'macbook', price: 123000 },
     ]
};
// second product price
// console.log(products.data[1].price);

const user = {
     id: 5001,
     name: 'Santo',
     address: {
          street: {
               first: ' 50 jonota hougin',
               second: 'mirpur',
               third: 'Dhaka'
          },
          city: 'Dhaka'
     }
}

const user2 = {
     id: 5002,
     name: 'usman',
     address: {
          city: 'chittagong',
          country: 'Bangladesh'
     }
}

console.log(user2.address.street?.first);
