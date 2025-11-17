# API de Reservas Hoteleras

## Descripción

Esta API permite **gestionar reservas hoteleras** de forma completa, ofreciendo operaciones CRUD (crear, leer, actualizar y eliminar) junto con potentes opciones de filtrado.  

El proyecto fue desarrollado en **Node.js + Express**, utilizando una **estructura modular** y documentación automática con **Swagger UI**.  

---

# Despliegue en Render.com

https://reservashotelerasrender.onrender.com

---

## Funcionalidades principales

La API permite:

1. **Crear reservas** con los detalles necesarios:

   - Hotel  
   - Tipo de habitación  
   - Cantidad de huéspedes  
   - Fechas de check-in y check-out  
   - Estado de la reserva
   - Nombre del cliente  
   - Notas opcionales  

2. **Visualizar la lista completa de reservas.**

3. **Obtener la información de una reserva específica** mediante su identificador único.

4. **Actualizar una reserva existente.**

5. **Eliminar reservas registradas.**

6. **Buscar reservas filtrando por:**

   - Hotel  
   - Rango de fechas (checkin / checkout)  
   - Tipo de habitación  
   - Estado de la reserva 
   - Cantidad de huéspedes  

7. **Almacenar todas las reservas** en una **estructura de datos persistente (archivo JSON)**.

---

## Tecnologías utilizadas

| Tecnología | Descripción |
|-------------|-------------|
| **Node.js** | Entorno de ejecución para JavaScript en el servidor. |
| **Express** | Framework para la construcción de APIs RESTful. |
| **Swagger UI** | Herramienta para documentar y probar los endpoints de la API. |
| **dotenv** | Manejo seguro de variables de entorno. |
| **uuid** | Generación de identificadores únicos para las reservas. |
| **IA (ChatGPT – OpenAI)** | Utilizada para asistencia técnica y estructuración del proyecto. |

---

## Enfoque sincrónico (sin async/await)

Este proyecto fue diseñado para funcionar **de forma completamente sincrónica**, sin el uso de `async/await` ni promesas.  
Las operaciones de lectura y escritura se realizan mediante el módulo nativo `fs`, lo cual **simplifica el flujo lógico del código** y facilita la comprensión de los procesos CRUD.

---

## Estructura del proyecto

```
src/
├── config/
│   └── index.js
├── controllers/
│   └── reservasController.js
├── middlewares/
│   └── validarReserva.js
├── models/
│   └── reservaModel.js
├── routes/
│   └── reservasRoutes.js
├── services/
│   └── reservaService.js
├── data/
│   └── reservas.txt
└── main.js
```

---

## API Rest en Visual Studio Code

Con el fin de evitar descargar Postman u otras tecnologías que ocupen espacio en el disco, se utilizó Thunder Client, librería que permite realizar pruebas de APIs, ahorrando espacio innecesario en el disco, además de tener las funcionales básicas para pruebas. Una vez iniciado el servidor, se tiene acceso a los endpoints en:

**http://localhost:3000/api/reservas**


## Endpoints disponibles

| Método | Ruta | Descripción |
|--------|------|-------------|
| **GET** | `/api/reservas` | Obtener todas las reservas o filtrarlas según parámetros. |
| **GET** | `/api/reservas/:id` | Obtener una reserva específica. |
| **POST** | `/api/reservas` | Crear una nueva reserva. |
| **PUT** | `/api/reservas/:id` | Actualizar una reserva existente. |
| **DELETE** | `/api/reservas/:id` | Eliminar una reserva. |

---

## Parámetros de filtrado (GET `/api/reservas`)

Se puede aplicar uno o varios filtros al mismo tiempo, por ejemplo:

```
/api/reservas?hotel=Hilton&estado=Confirmada
```

O también por rango de fechas:
```
/api/reservas?checkin=2026-05-01&checkout=2026-06-01
```

Otros filtros disponibles:

- `habitacion`
- `huespedes`
- `cliente`
- `estado`

---

## Documentación interactiva (Swagger)

Una vez iniciado el servidor, se puede acceder a la documentación Swagger en:

**http://localhost:3000/api/docs**

Desde esta interfaz podrás:

- Consultar los endpoints disponibles.
- Probar solicitudes `GET`, `POST`, `PUT` y `DELETE` directamente.
- Visualizar las estructuras de entrada y salida esperadas.

---

## src/data/reservas.txt

Este archivo actúa solamente como un almacenaje de prueba con algunos ejemplos de reservas hoteleras (hay que hacer POST manualmente y de forma individual para registrar las reservas).
