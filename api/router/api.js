const router=require('express').Router()
const regc=require('../controllers/regcontroller')
const productc=require('../controllers/productcontroller')
const cartc=require('../controllers/cartcontroller')
const upload=require('../helper/multer')


router.post('/reg',regc.register)
router.post('/logincheck',regc.logincheck)
router.post('/addproduct',upload.single('img'),productc.addproduct)
router.get('/allrecord',productc.alldatafind)
router.get('/singaldata/:id',productc.singaldata)
router.put('/productdataupdate/:id',upload.single('img'),productc.dataupdate)
router.get('/stockdata',productc.stockdata)
router.post('/cart',productc.cart)
router.post('/cartvalue/:username',cartc.cartvalue)
router.get('/userdata/:username',cartc.userdata)

module.exports=router