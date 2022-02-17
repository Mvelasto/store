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

  create(data){
    const newUser = {
      id: faker.datatype.uuid(),
      ...data
    }
    this.users.push(newUser);
    return {message: 'usuario creado', data: newUser }
  }
  find(){
    return this.users = [];
  }
  findOne(id){
    return this.users.find(item => item.id === id);
  }
  update(id, changes){
    const index =  this.users.find(item => item.id === id);
    if(index === -1) throw new Error('User not found');
    else{
      const user = this.users[index];
      this.users[index] = {...user, ...changes};
    }
    const element = {
      message: 'update',
      data: changes
    }
    return element;
  }
  delete(id){
    const index =  this.users.find(item => item.id === id);
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
