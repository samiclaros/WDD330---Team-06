// main.js
import ProductList from './ProductList.mjs';
import ProductData from './ProductData.mjs'; // <-- Import ProductData

const list = new ProductList('tents');
console.log(list.getProducts());

// Create instance of ProductData
const dataSource = new ProductData('tents');

// Example usage of getData() and findProductById
dataSource.getData().then(products => {
    console.log('All products:', products);
});

dataSource.findProductById('12345').then(product => {
    if (product) {
        console.log('Found product:', product);
    } else {
        console.log('Product not found');
    }
});
