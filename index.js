import express from 'express';
import dotenv from 'dotenv';
import router from "./routes/index.js";
import db from './config/db.js';

dotenv.config();

const app = express();


db.authenticate()
.then(()=> console.log('conectado'))
.catch(error => console.log(error))

const port = process.env.PORT || 4000 ;


app.set('view engine', 'pug');

// Middlewares:

app.use((req,res, next) => {
    const currentYear = new Date().getFullYear();
    res.locals.currentYear = currentYear;
    res.locals.nombrePagina = 'Agencia de Viajes';
    next();
})
// body parser
app.use(express.urlencoded({extended:true}))
// 
app.use(express.static('public'));

app.use('/', router);
app.listen(port, () => {
    console.log(`connected to ${port}`)
})