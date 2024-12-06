import { v4 as uuidv4 } from 'uuid';

class Product {
    constructor(id, { name, description, price, soldout, stores }) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.soldout = soldout;
        this.stores = stores;
    }
}

const productDatabase = {};

const resolvers = {
    getProduct : ({id }) => {
        return new Product(id, productDatabase[id])
    },
    createProduct: ({ input }) => {
        let id = uuidv4();
        productDatabase[id] = input;
        return new Product(id, input);
    }
}

export default resolvers;