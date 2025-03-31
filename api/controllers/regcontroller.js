const Reg = require('../models/reg')
const bcrypt = require('bcrypt')

exports.register = async (req, res) => {
    // console.log(req.body)
    try {
        const { username, password } = req.body
        const cpass = await bcrypt.hash(password, 10)
        const usercheck = await Reg.findOne({ username: username })
        const record = new Reg({ username: username, password: cpass })
        if (usercheck == null) {
            record.save()
            //console.log(record)
            res.status(201).json({
                message: "successfully record creat record has been craeting",
                status: 201

            })
        } else {
            res.status(400).json({
                message: `${username} is already register`
            })
        }
    }

    catch (error) {
        res.status(400).json({
            message: error.message,
            status: 400
        })
    }
}


exports.logincheck = async (req, res) => {
    console.log(req.body)
    try {
        const { username, password } = req.body
        //console.log(req.body)
        const record = await Reg.findOne({ username: username })
        //console.log(record)
        if (record !== null) {
            let compare = await bcrypt.compare(password, record.password)
            //console.log(compare)
            if (compare) {
                res.status(200).json({
                    status: 200,
                    username: record.username
                })
            } else {
                res.status(400).json({
                    status: 400,
                    message: 'wrong credentailss'
                })
            }
        } else {
            res.status(400).json({
                status: 400,
                message: 'wrong credentails'
            })
        }

    } catch (error) {
        res.status(400).json({
            status: 400,
            message: error.message
        })
    }
}