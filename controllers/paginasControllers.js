import { Testimonio } from '../models/Testimonios.js';
import {Viaje} from '../models/Viaje.js'

const paginaInicio = async (req,res)=>{
    const promiseDB = [];
    promiseDB.push(Viaje.findAll({limit:3}))
    promiseDB.push(Testimonio.findAll({limit:3}))
    try{
        const resultado = await Promise.all(promiseDB)
        res.render('inicio',{
            pagina: 'Inicio',
            clase: 'home',
            viajes: resultado[0],
            testimonios: resultado[1]
        })
    }
    catch(err){
        console.log(err)
    }
};

const paginaNosotros = (req,res)=>{
    res.render('nosotros',{
        pagina: 'Nosotros'
    })
};

const paginaViajes = async (req,res)=>{
    const viajes = await Viaje.findAll();
    res.render('viajes',{
        pagina: 'Próximos Viajes',
        viajes
    })
};

const paginaTestimonios = async (req,res)=>{
    try{
        const testimonios = await Testimonio.findAll();
        res.render('testimonios',{
            pagina: 'Testimonios',
            testimonios
        })
    }catch(err){
        console.log(err)
    }
};


const paginaDetallesViaje = async (req,res)=>{
    const {slug} = req.params;
    try{
        const resultado = await Viaje.findOne({where : {slug}});
        res.render('viaje',{
            pagina: 'Información Viaje',
            resultado
        })
    }
    catch(err){console.log(err)}
};
export {
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaTestimonios,
    paginaDetallesViaje
}