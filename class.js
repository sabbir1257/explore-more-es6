const products = [
     { id: 1, name: 'lenovo', price: 65000 },
     { id: 2, name: 'Dell', price: 45000 },
     { id: 3, name: 'Hp', price: 40000 },
     { id: 4, name: 'Mac', price: 150000 },
];


// has some properties, mathod 
class Product {
     country = 'Bangladesh';
     constructor(name){
          this.name = name;
     }
     speak(talk) {
          console.log(`talking about ${talk}`);

     }
}

const lenovo = new Product('Le le lenovo');
console.log(lenovo);
lenovo.speak('oba  kita kau');