// import mongoose
const mongoose = require('mongoose')

// database configuration 
const DATABASE_URL =
'mongodb+srv://thematthewlane:flatkouppa7@cluster1.smwrnhs.mongodb.net/?retryWrites=true&w=majority';;

// mongoose connect to url
mongoose.connect(DATABASE_URL)

// export mongoose 
module.exports = { mongoose }













