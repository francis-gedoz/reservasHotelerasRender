import * as ReservaService from '../services/reservaService.js';

export const listarReservas = (req, res) => {
try {
    const filtros = req.query;
    const resultados = ReservaService.obtenerReservas(filtros);
    res.status(200).json(resultados);
} catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener las reservas' });
}
};

export const obtenerReserva = (req, res) => {
    const { id } = req.params;
    const reserva = ReservaService.obtenerReservaPorId(id);
    if (!reserva) return res.status(404).json({ mensaje: 'Reserva no encontrada' });
    res.status(200).json(reserva);
};

export const crearReserva = (req, res) => {
try {
    const nueva = ReservaService.crearReserva(req.body);
    res.status(201).json(nueva);
} catch (error) {
    res.status(400).json({ mensaje: 'Error al crear la reserva' });
}
};

export const actualizarReserva = (req, res) => {
    const { id } = req.params;
    const actualizada = ReservaService.actualizarReserva(id, req.body);
    if (!actualizada) return res.status(404).json({ mensaje: 'Reserva no encontrada' });
    res.status(200).json(actualizada);
};

export const eliminarReserva = (req, res) => {
    const { id } = req.params;
    const eliminada = ReservaService.eliminarReserva(id);
    if (!eliminada) return res.status(404).json({ mensaje: 'Reserva no encontrada' });
    res.status(204).send();
};
