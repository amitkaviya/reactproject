const product = require('../models/products')


exports.addproduct = (req, res) => {
    try {
        //console.log(req.body)
        //console.log(req.file)
        const { name, desc, mdesc, price, qty } = req.body
        const filename = req.file.filename
        const record = new product({ name: name, desc: desc, mdesc: mdesc, price: price, img: filename, quantity: qty })
        record.save()
        //console.log(record)
        res.status(201).json({
            status: 201,
            message: "succefful  product update "
        })
    } catch (error) {
        res.status(400).json({
            status: 400,
            message: error.message

        })
    }
}



exports.alldatafind = async (req, res) => {
    try {
        const record = await product.find()
        //console.log(record)
        res.json({
            status: 200,
            apiData: record
        })
    } catch (error) {
        res.json({
            status: 500,
            message: error.message
        })
    }
}


exports.singaldata = async (req, res) => {
    try {
        const id = req.params.id
        const record = await product.findById(id)
        res.status(200).json({
            status: 200,
            apiData: record
        })
    } catch (error) {
        res.status(500).json({
            status: 500,
            message: error.message
        })
    }
}



exports.dataupdate = async (req, res) => {
   // console.log(req.file)
    //console.log(req.params.id)
    //console.log(req.body)
    try {
        const { name, desc, mdesc, price, qty, status } = req.body
        const id = req.params.id
        if (req.file) {
            const filename = req.file.filename
            const record = await product.findByIdAndUpdate(id, { name: name, desc: desc, mdesc: mdesc, price: price, quantity: qty, status: status, img: filename })
        } else {
            const record = await product.findByIdAndUpdate(id, { name: name, desc: desc, mdesc: mdesc, price: price, quantity: qty, status: status })

        }
        res.status(201).json({
            status: 201,
            message: 'data is succefully updated ',
        })
    } catch (error) {
        res.status(400).json({
            status: 400,
            message: error.message
        })


    }
}


exports.stockdata = async (req, res) => {
    try {
        const record = await product.find({ status: 'IN STOCK' })
        res.status(200).json({
            status: 200,
            apiData: record

        })
    } catch (error) {
        res.status(500).json({
            status: 500,
            message: error.message
        })
    }
}


exports.cart = async (req, res) => {
    //console.log(req.body)
    try {
        const { ids } = req.body
        const record = await product.find({ _id: { $in: ids } })
        res.status(200).json({
            status: 200,
            apiData: record
        })
    } catch (error) {
        res.status(400).json({
            status: 400,
            message: error.message

        })
    }
}