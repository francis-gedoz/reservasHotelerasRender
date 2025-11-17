import * as ReservaModel from '../models/reservaModel.js';

export const obtenerReservas = (filtros) => {
    return ReservaModel.obtenerTodas(filtros);
};

export const obtenerReservaPorId = (id) => {
    return ReservaModel.obtenerPorId(id);
};

export const crearReserva = (datos) => {
    return ReservaModel.crear(datos);
};

export const actualizarReserva = (id, datos) => {
    return ReservaModel.actualizar(id, datos);
};

export const eliminarReserva = (id) => {
    return ReservaModel.eliminar(id);
};
