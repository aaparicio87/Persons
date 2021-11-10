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
router.post('/api/colors', auth, ChildController.addColor);
router.get('/api/colors', auth, ChildController.showColors);
router.delete('/api/colors/:uuid', auth, ChildController.deleteColor);


// Person CRUD
router.post('/api/cars',auth, PersonController.addCar);
router.get('/api/cars', PersonController.showCars);
router.get('/api/cars/:uuid', PersonController.showCar);
router.put('/api/cars/:uuid',auth, PersonController.updateCar);
router.delete('/api/cars/:uuid',auth, PersonController.deletCar);


module.exports = router;
