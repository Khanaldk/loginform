import express from 'express'
import morgan from 'morgan';
import UserController from '../controller/Usercontroller.js';
const router=express.Router();


router.get('/',UserController.Home)
router.get('/registration',UserController.Registration)
router.post('/registration',UserController.createUserdoc)
router.get('/login',UserController.Login)
router.post('/login',UserController.Loginuser)
router.get('/changepassword',UserController.Changepassword)
router.post('/changepassword',UserController.Newpassword)





export default router