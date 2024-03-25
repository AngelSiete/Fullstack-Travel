import  express from 'express';
import { paginaInicio,paginaNosotros,paginaViajes,paginaTestimonios } from '../controllers/paginasControllers.js';

const router = express.Router();

router.get('/', paginaInicio)

router.get('/nosotros',paginaNosotros)

router.get('/viajes',paginaViajes)

router.get('/testimonios',paginaTestimonios)

export default router;

