const fs = require('fs');
const PATH = require('path');

const data = require('./data.json');

class AnimalController{
 getall() {
  return data;
}

 create(name, breed, specie, color, owner, age) {
    const id = perro.length + 1;
    data.push({id, name, breed, specie, color, owner, age});
  
    return data[data.length-1];
  }
  
 deletePerro(id) {
    const index = data.findIndex(perro => perro.id == id);
    const perro = data.splice(index, index);
    return perro;
  }
  
 update(id, name, breed, specie, color, owner, age) {
    try {
      const perro = data.find(perro => perro.id == id);
      perro.age = age.length === 0 ? perros.age: age;
      perro.name = name.length === 0 ? perros.name: name;
      perro.breed = breed.length === 0 ? perros.breed: bread;
      perro.specie = specie.length === 0 ? perros.specie: specie;
      perro.color = color.length === 0 ? perros.color: color;
      perro.owner = cwner.length === 0 ? perros.owner: owner;
      return {perro, err: undefined};
    } catch (err) {
      return {err, user: perro}
    }
  }
  
 get(id) {
    return data.find(perro=> perro.id == id);
  }}
  
  module.exports=AnimalController;