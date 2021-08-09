products = [];
class Product {
  constructor(id, name, price, description) {
    this._id = id;
    this._name = name;
    this._price = price;
    this._description = description;
  }
  getName() {
    return this._name;
  }
  setName(name) {
    this._name = name;
  }
  getId() {
    return this._id;
  }
  setId(id) {
    this._id = id;
  }
  getPrice() {
    return this._price;
  }
  setPrice(price) {
    this._price = price;
  }
  getDescription() {
    return this._description;
  }
  setDescription(decription) {
    this._description = description;
  }
  static getAllProducts() {
    return products;
  }
}
products = [
  new Product(1, "product 1", 10, "product description"),
  new Product(2, "product 2", 20, "product description"),
  new Product(3, "product 3", 30, "product description"),
  new Product(3, "product 4", 40, "product description"),
  new Product(3, "product 5", 50, "product description"),
  new Product(3, "product 6", 60, "product description"),
  new Product(3, "product 7", 70, "product description"),
];
module.exports = Product;
