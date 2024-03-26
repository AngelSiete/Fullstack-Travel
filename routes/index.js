import  express from 'express';
import { paginaInicio,paginaNosotros,paginaViajes,paginaTestimonios,paginaDetallesViaje } from '../controllers/paginasControllers.js';

const router = express.Router();

router.get('/', paginaInicio)

router.get('/nosotros',paginaNosotros)

router.get('/viajes',paginaViajes)

router.get('/viajes/:slug',paginaDetallesViaje)

router.get('/testimonios',paginaTestimonios)

export default router;

