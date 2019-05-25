//se está em ambiente de produção não require o módulo dotenv
if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config()
}
const express = require('express');
const morgan = require('morgan');
const multer = require('multer');
const path = require('path');

//initializations
const app = express();
require('./database')

//settings
app.set('port', process.env.PORT || 3000)

//middlewares
app.use(morgan('dev'));
const storage = multer.diskStorage({
    destination: path.join(__dirname, 'public/uploads'),
    filename(req, file, cb){
        cb(null, new Date().getTime() + path.extname(file.originalname))
    }
})
app.use(multer({storage}).single('image'));
app.use(express.urlencoded({extends: false}))
app.use(express.json());

//Routes
app.use('/api/books', require('./routes/books'));

//Static files
app.use(express.static(path.join(__dirname, 'public')))

//start server
app.listen(app.get('port'), ()=>{
    console.log('Servidor Rodando na porta', app.get('port'));
})