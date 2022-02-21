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

  create(data){
      // creamos nosotros la id, y la concatenamos con el resto de la data q viene del front
      const newProduct = {
        id: faker.datatype.uuid(),
        ...data
      }

      this.products.push(newProduct);

      const element = {
        message: 'created',
        data: newProduct
      }
      return element;
  }

  find(){
      return this.products;
  }

  findOne(id){
    const name = this.getTotal();
    return this.products.find(item => item.id === id);
  }

  update(id, changes){
      const index = this.products.findIndex(item => item.id === id); //😁 listo!

      if(index === -1) throw new Error('Product not found');
      else{
          const product = this.products[index];
          this.products[index] = { ...product, ...changes };
      }

      const element = {
          message: 'update',
          data: changes
      }
      return element;
  }

  delete(id){
      const index = this.products.findIndex(item => item.id === id);
      if(index === -1) throw new Error('Product not found');
      else this.products.splice(index, 1);

      const element = {
        id: id,
        message: 'eliminado',
      }
      return element;
  }

}

module.exports = ProductsService;
