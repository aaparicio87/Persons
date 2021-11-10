const express = require('express');
const router = express.Router();

const AuthController = require('../controllers/authController');
const ChildController = require('../controllers/childController');
const PersonController = require('../controllers/personController');

//Middlewares
const auth = require('../middlewares/auth');

// Auth
router.post('/api/signin', AuthController.signIn);
router.post('/api/signup', AuthController.signUp);

// Child CRUD
router.post('/api/childs', auth, ChildController.addChild);
router.get('/api/childs', auth, ChildController.showChild);
router.delete('/api/childs/:uuid', auth, ChildController.deleteChild);


// Person CRUD
router.post('/api/persons',auth, PersonController.addPerson);
router.get('/api/persons',auth, PersonController.showPersons);
router.get('/api/persons/:uuid',auth, PersonController.showPerson);
router.put('/api/persons/:uuid',auth, PersonController.updatePerson);
router.delete('/api/persons/:uuid',auth, PersonController.deletePerson);


module.exports = router;
