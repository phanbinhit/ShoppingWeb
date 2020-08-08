function Product(id ,pathImage, title, author, price, type) {
    this.id = id;
    this.pathImage = pathImage;
    this.title = title;
    this.author = author;
    this.price = price;
    this.type = type;
};

module.exports = Product;