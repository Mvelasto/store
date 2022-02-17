const faker = require('faker');

class categoryService {

  constructor(){
    this.categories = [];
    this.generate();
  }

    generate(){
        const limitCategory = 10;
        const limitProduct = 3;
        let products =[];

        for (let index = 0; index < limitCategory; index++) {
          for (let i = 0; i < limitProduct; i++) {
            products.push({
              id: faker.datatype.uuid(),
              name: faker.commerce.productName(),
              price: parseInt(faker.commerce.price(),10),
              image: faker.image.imageUrl()
            })
          }
          this.categories.push({
            id: faker.datatype.uuid(),
            name: 'cat_'+faker.commerce.productName(),
            product: products
          })
          products = [];
        }
    }

    find(){
      return this.categories;
    }

    findOne(id){
      return this.categories.find(item => item.id === id);
    }

    create(data){
      const newCategory = {
        id: faker.datatype.uuid(),
        ...data
      }

      this.categories.push(newCategory)
      return {
        message: "creado",
        data: newCategory
      }

    }

    update(id, changes){
        const index = this.categories.findIndex(item => item.id === id);

        if(index === -1) throw new Error('category not found');
        else{
            const category = this.categories[index];
            this.categories[index] = { ...category, ...changes };
        }

        const element = {
            message: 'update',
            data: changes
        }
        return element;
    }

    delete(id){
      const index = this.categories.findIndex(item => item.id === id);
      if(index === -1) throw new Error('Category not found');
      else this.categories.splice(index, 1);

      const element = {
        id: id,
        message: 'eliminado',
      }
      return element;
  }

}

module.exports = categoryService;
