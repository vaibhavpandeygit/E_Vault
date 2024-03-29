const Router = require('express')
const router = Router();
const { registerController, loginController, docsUpload } = require('../controller/authContoller');
const { requireSignIn } = require('../middlewares/authMiddleware');

//---Register Route---//
router.post('/register',registerController)

//---Login Route---//
router.post('/login',loginController)

//----Protected Routes---
router.post('/docsupload',requireSignIn,docsUpload);




module.exports = {router}