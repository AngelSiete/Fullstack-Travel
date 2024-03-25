import {Viaje} from '../models/Viaje.js'

const paginaInicio = (req,res)=>{
    res.render('inicio',{
        pagina: 'Inicio'
    })
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

const paginaTestimonios = (req,res)=>{
    res.render('testimonios',{
        pagina: 'Testimonios'
    })
};

export {
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaTestimonios
}