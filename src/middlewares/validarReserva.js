export const validarReserva = (req, res, next) => {
const { hotel, habitacion, huespedes, checkin, checkout } = req.body;

if (!hotel || !habitacion || !huespedes || !checkin || !checkout) {
    return res.status(400).json({
    mensaje: 'Los campos hotel, habitacion, huespedes, checkin y checkout son obligatorios.',
    });
}

if (isNaN(huespedes) || huespedes <= 0) {
    return res.status(400).json({ mensaje: 'El campo huespedes debe ser un número positivo.' });
}

if (new Date(checkin) > new Date(checkout)) {
    return res.status(400).json({ mensaje: 'La fecha de check-in no puede ser posterior al check-out.' });
}

next();
};
