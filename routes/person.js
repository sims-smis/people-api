const express = require('express');
const router = express.Router();
const Person = require('../models/Person');
// GET /person
router.get('/person', async (req, res) => {
  const people = await Person.find();
  res.render('index', { people });
});

// POST /person (Form page)
router.get('/person/new', (req, res) => {
  res.render('form', { person: {} });
});

// POST /person (Submit new person)
router.post('/person', async (req, res) => {
    const { name, age, gender, mobile } = req.body;
  
    if (!name || !age || !gender || !mobile) {
      return res.status(400).send("All fields are required!");
    }
  
    const newPerson = new Person({ name, age, gender, mobile });
    await newPerson.save();
    res.redirect('/person');
  });
  

// PUT /person/:id (Form page to edit)
router.get('/person/:id/edit', async (req, res) => {
  const person = await Person.findById(req.params.id);
  res.render('form', { person });
});

// PUT /person/:id (Submit updated person)
router.put('/person/:id', async (req, res) => {
  await Person.findByIdAndUpdate(req.params.id, req.body);
  res.redirect('/person');
});

// DELETE /person/:id (Confirmation page)
router.get('/person/:id/delete', async (req, res) => {
  const person = await Person.findById(req.params.id);
  res.render('delete', { person });
});

// DELETE /person/:id (Perform delete)
router.delete('/person/:id', async (req, res) => {
  await Person.findByIdAndDelete(req.params.id);
  res.redirect('/person');
});

module.exports = router;
