const {
  Catalog,
  Cart,
  User,
  FileStorage,
  Order,
  Feedback,
  PosCart,
  Logistic,
} = require("./ApplicationModels");

class ApplicationClient {
  constructor(config) {
    this.catalog = new Catalog(config);
    this.cart = new Cart(config);
    this.user = new User(config);
    this.fileStorage = new FileStorage(config);
    this.order = new Order(config);
    this.feedback = new Feedback(config);
    this.posCart = new PosCart(config);
    this.logistic = new Logistic(config);
  }
}

module.exports = ApplicationClient;
