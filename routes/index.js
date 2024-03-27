import  express from 'express';
import { paginaInicio,paginaNosotros,paginaViajes,paginaTestimonios,paginaDetallesViaje } from '../controllers/paginasControllers.js';
import { guardarTestimonio } from '../controllers/testimoniosController.js';

const router = express.Router();

router.get('/', paginaInicio)

router.get('/nosotros',paginaNosotros)

router.get('/viajes',paginaViajes)

router.get('/viajes/:slug',paginaDetallesViaje)

router.get('/testimonios',paginaTestimonios)

router.post('/testimonios', guardarTestimonio)


export default router;

