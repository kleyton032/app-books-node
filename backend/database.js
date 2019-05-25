const mongoose = require('mongoose')

//utilizando váriaveis de ambientes na conexão com db
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true})
.then(db=> console.log('Banco conectado'))
.catch(err => console.log(err))