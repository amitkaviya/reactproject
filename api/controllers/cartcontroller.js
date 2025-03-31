const cart = require('../models/cart')
const product = require('../models/products')


exports.cartvalue = async (req, res) => {
    try {
        const { item } = req.body
        //console.log(item)
        const username = req.params.username
        for (let key in item) {//for loop h item ki value key me aa rahi h 
            //console.log(key,item[key])
            const record = await product.findById(key)
            //console.log(record)
            const newcart = new cart({ name: record.name, qty: item[key], price: record.price, username: username })
            newcart.save()
            //console.log(newcart)
        }
        res.status(201).json({
            status: 201

        })

    } catch (error) {
        res.status(400).json({
            status: 400,
            message: error.message
        })
    }
}

exports.userdata = async (req, res) => {
    try {
        const username = req.params.username
        const record = await cart.find({ username: username })
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