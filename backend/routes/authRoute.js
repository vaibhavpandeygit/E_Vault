const Router = require('express')
const router = Router();
const { registerController, loginController } = require('../controller/authContoller');

//---Register Route---//
router.post('/register',registerController)

//---Login Route---//
router.post('/login',loginController)


module.exports = {router}