const fs = require('fs');
const PATH = require('path');

const data = require('./data.json');

function create(name, age) {
    const id = users.length + 1;
    data.push({id, name, age});
  
    return data[data.length-1];
  }
  
  function deleteUser(id) {
    const index = data.findIndex(user => user.id == id);
    const user= data.splice(index, index);
    return user;
  }
  
  function update(id, name, age) {
    try {
      const user = data.find(user => user.id == id);
      user.age = age.length === 0 ? users.age: age;
      user.name = name.length === 0 ? users.name: name;
      return {user, err: undefined};
    } catch (err) {
      return {err, user: user}
    }
  }
  
  function get(id) {
    return data.find(user=> user.id == id);
  }
  
  module.exports = {
    users,
    create,
    delete: deleteUser,
    update,
    get
  };