const Router = require('express')
const router = Router();
const { registerController, loginController, docsUpload } = require('../controller/authContoller');
const { requireSignIn } = require('../middlewares/authMiddleware');
const { userModel } = require('../models/userModel');

//---Register Route---//
router.post('/register',registerController)

//---Login Route---//
router.post('/login',loginController)

//----Protected Routes---
router.put('/docsupload',docsUpload);

router.get('/:id',async(req,res)=>{
    try {
        const {id} = req.params
        const data = await userModel.findOne({_id:id})

        if(!data){
            return res.status(404).send({
                success: false,
                message: "No Uploaded Documents"
            })
        }

        res.status(200).send({
            success: true,
            data: data
        })

    } catch (error) {
        res.send({
            success: false,
            message: error.message
        })

    }
})


module.exports = {router}