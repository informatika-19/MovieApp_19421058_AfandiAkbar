const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
    username: {
        type: String
    },
    namaLengkap:{
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    level: {
        type: Number,
        //level
        default: 2
    }
})

module.exports = mongoose.model('user', UserSchema)