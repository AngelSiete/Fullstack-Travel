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