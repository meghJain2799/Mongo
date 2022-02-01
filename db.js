const mongoose = require ('mongoose')
MongoURI = 'mongodb://localhost:27017/notepad?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false'

const connectToMongo = ()=>{
    mongoose.connect(MongoURI,(()=>{
        console.log("mongo has been connected")
    }))
}
module.exports = connectToMongo