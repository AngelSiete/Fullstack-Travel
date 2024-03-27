import { Testimonio } from "../models/Testimonios.js";

const guardarTestimonio = async (req,res) => {
    // validate
    const {nombre, correo ,mensaje } = req.body;
    const errores = [];
    if (nombre.trim()===''){errores.push({mensaje:'nombre vacío'})}
    if (correo.trim()===''){errores.push({mensaje:'correo vacío'})}
    if (mensaje.trim()===''){errores.push({mensaje:'mensaje vacío'})}
    if (errores.length > 0){
        const testimonios = await Testimonio.findAll();
        res.render('testimonios',{
            pagina: 'Testimonios',
            errores,
            nombre,
            correo,
            mensaje,
            testimonios
        })
    }else{
        try{
            await Testimonio.create({
                nombre,
                correo,
                mensaje 
            });
            res.redirect('/testimonios')
        }catch(err){console.log(err)}
    }
}
export {guardarTestimonio};