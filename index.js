import  express from 'express';

const app = express();

const port = process.env.PORT || 4000 ;

app.get('/',(req,res)=>{
    res.json({
        id: 0
    })
})

app.listen(port, () => {
    console.log(`connected to ${port}`)
})