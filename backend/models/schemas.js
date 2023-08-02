const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema ({
    firstName: {type:String},
    lastName: {type:String},
    email: {type:String},
    lastLoginDate: {type:Date},
    role: {type:String},
    phone: {type:String}

})
const Users = mongoose.model('Users', userSchema, 'users')
module.exports = mongoose.model.Users || mongoose.model("Users", userSchema);
const mySchemas = {'Users':Users}

module.exports = mySchemas