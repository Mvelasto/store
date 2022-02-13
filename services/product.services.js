const faker = require('faker');

class ProductsService {

  constructor(){
    this.products = [];
    this.generate();
  }

  generate(){
    const limit = 100;

    for(let i = 0; i < limit; i++){
      this.products.push({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(),10),
        image: faker.image.imageUrl()
      })
    }
  }

  create(body){
    this.products.push(body);
    const element = {
      message: 'created',
      data: body
    }
    return element;
  }

  find(){
    return this.products;
  }

  findOne(id){
    return this.products.find(item => item.id === id);
  }

  update(id, body){
    this.products.find(item => item.id === id); //😫😪😪😪 pendiente
    const element = {
      id: id,
      message: 'update',
      data: body
    }
    return element;
  }

  delete(id){
    const element = {
      id: id,
      message: 'eliminado',
    }
    return element;
    // this.products.forEach(element => {
    //   if(element.id === id) element.id.slice()
    // })
  }

}

module.exports = ProductsService;
