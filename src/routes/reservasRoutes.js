import express from 'express';
import {
    listarReservas,
    obtenerReserva,
    crearReserva,
    actualizarReserva,
    eliminarReserva,
} from '../controllers/reservasController.js';
import { validarReserva } from '../middlewares/validarReserva.js';

const router = express.Router();

router.get('/', listarReservas);
router.get('/:id', obtenerReserva);
router.post('/', validarReserva, crearReserva);
router.put('/:id', validarReserva, actualizarReserva);
router.delete('/:id', eliminarReserva);

export default router;
