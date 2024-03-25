import  express from 'express';
const app = express();

import router from "./routes/index.js";

const port = process.env.PORT || 4000 ;


app.set('view engine', 'pug');

// Middlewares:

app.use((req,res, next) => {
    const currentYear = new Date().getFullYear();
    res.locals.currentYear = currentYear;
    res.locals.nombrePagina = 'Agencia de Viajes';
    next();
})

app.use(express.static('public'));

app.use('/', router);
app.listen(port, () => {
    console.log(`connected to ${port}`)
})