const mongoose = require('mongoose');

const url = 'mongodb+srv://afnavarro27:felipe123@cluster0.6wd0h.mongodb.net/?retryWrites=true&w=majority'

const connectionParams ={
    useNewUrlParser : true,
    useUnifiedTopology : true
}

mongoose.connect(url,connectionParams)
    .then(()=>{
        console.log('conectado a la base de datos');
    })
    .catch((err)=>{
        console.error(`error en la coneccion a la base de datos: ${err}̣`)
    })

module.exports={
    mongoose
}