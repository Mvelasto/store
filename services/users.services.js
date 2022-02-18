const faker = require('faker');

class UserService {

  constructor(){
    this.users = [];
    this.generate();
  }

  generate(){
    const limit = 3;
    for(let i = 0; i < limit; i++){
      this.users.push({
        id: faker.datatype.uuid(),
        name: faker.name.findName(),
        email: faker.internet.email(),
        image: faker.image.avatar()
      })
    }
  }

  async create(data){
    const newUser = {
      id: faker.datatype.uuid(),
      ...data
    }
    this.users.push(newUser);
    return {message: 'usuario creado', data: newUser }
  }
  async find(){
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.users)
      }, 1000);
    })

    //return this.users;
  }
  async findOne(id){
    return this.users.find(item => item.id === id);
  }

  async update(id, changes){
    const index =  this.users.findIndex(item => item.id === id);
    if(index === -1) throw new Error('User not found');
    else{
      const user = this.users[index];
      this.users[index] = {...user, ...changes};
    }
    const element = {
      message: 'update_',
      data: this.users[index].name
    }
    return element;
  }


  async delete(id){
    const index =  this.users.findIndex(item => item.id === id);
    if(index === -1) throw new Error('User not found');
    else this.users.splice(index, 1);

      const element = {
        id: id,
        message: 'eliminado',
      }
      return element;
  }

}

module.exports = UserService;
