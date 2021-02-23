const express = require('express');
//const Joi = require('joi');
const router = express.Router();

const perros = require('../prros');
const animalesF = new perros();
/*const schema = Joi.object({
  name: Joi.string().min(3).required(),
  age: Joi.number().greater(0),
  breed: Joi.string().min(3).required(),
  specie: Joi.string().min(3).required(),
  color: Joi.string().min(3).required()
});*/

router.get('/', (req, res) => {
  const {orderBy} = req.query;
  let a = animalesF.getall();
  console.log(a);
  res.status(200).send(a);
});

/*router.get('/:id', (req, res) => {
  const {id} = req.params;

  res.send(perros.get(id));
});*/

/*router.post('/', (req, res) => {
  const {name, breed, specie ,age, color} = req.body;

  const result = schema.validate({name, age});
  if (result.error) return res.status(400).send(result.error.details[0].message);

  const perro = perros.create(name, breed, specie ,age, color);

  res.send(perro);
});

router.put('/:id', (req, res, next) => {
  const {id} = req.params;
  const {name = '', age = '', breed = '', specie = '', color = ''} = req.body;

  const {perro, err} = perros.update(id, name, breed, specie ,age, color);
  if (err) return next();

  res.send(perro);
});

router.delete('/:id', (req, res) => {
  const {id} = req.params;

  const perro = perros.delete(id);

  res.send(perro);
});*/

module.exports = router;