import { v4 as uuidv4 } from 'uuid';

let reservas = [];

export const obtenerTodas = (filtros = {}) => {
    return reservas.filter((r) => {
    return (
        (!filtros.hotel || r.hotel.toLowerCase().includes(filtros.hotel.toLowerCase())) &&
        (!filtros.habitacion || r.habitacion.toLowerCase().includes(filtros.habitacion.toLowerCase())) &&
        (!filtros.estado || r.estado === filtros.estado) &&
        (!filtros.huespedes || r.huespedes === Number(filtros.huespedes)) &&
        (!filtros.checkin || new Date(r.checkin) >= new Date(filtros.checkin)) &&
        (!filtros.checkout || new Date(r.checkout) <= new Date(filtros.checkout))
    );
});
};

export const obtenerPorId = (reservaId) => reservas.find((r) => r.reserva === reservaId);

export const crear = (nuevaReserva) => {
const reserva = {
    reserva: uuidv4(),
    creado_en: new Date(),
    actualizado_en: new Date(),
    ...nuevaReserva,
};
reservas.push(reserva);
return reserva;
};

export const actualizar = (reservaId, datosActualizados) => {
const index = reservas.findIndex((r) => r.reserva === reservaId);
if (index === -1) return null;

reservas[index] = {
    ...reservas[index],
    ...datosActualizados,
    actualizado_en: new Date(),
};

return reservas[index];
};

export const eliminar = (reservaId) => {
const index = reservas.findIndex((r) => r.reserva === reservaId);
if (index === -1) return false;
reservas.splice(index, 1);
return true;
};
