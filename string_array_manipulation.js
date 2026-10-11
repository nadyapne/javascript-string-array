
const rawNames = " Syafira Nadya, NICOLE ZIZAE , Kraila Sam ";

console.log(rawNames);

const trimmedNames = rawNames.trim();
console.log(trimmedNames);

const namesArray = trimmedNames.split(",");
console.log(namesArray);


const cleanedNames = namesArray.map(name => name.trim().toLowerCase());

console.log(cleanedNames);


const formattedNames = cleanedNames.join(" | ");

console.log(formattedNames);


// CASE 2: E-Commerce Product Filter

const products = [
  { name: "Laptop", price: 1000, active: true },
  { name: "Mouse", price: 20, active: false },
  { name: "Keyboard", price: 50, active: true }
];

console.log(products);


const activeProducts = products.filter(product => product.active === true);

console.log(activeProducts);


const activeProductNames = activeProducts.map(product => product.name.toUpperCase());

console.log(activeProductNames);


const totalPrice = activeProducts.reduce((total, product) => total + product.price, 0);

console.log("Total harga produk aktif:", totalPrice);


