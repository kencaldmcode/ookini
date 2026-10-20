// datos de la condición

const cupoCata = 8;
const inscritos = 8;
//condicinal de cata abierta o llena
//si el número de cupos es mayor que el número de inscritos devuelve "Hay cyupos, abrir reserba",
// si no devuelve "Cata llena, ofrecer lista de espera"

if (cupoCata > inscritos) {
    console.log("Hay cupos, abrir reserva");
} else {
    console.log("Cata llena, ofrecer lista de espera");
}

// operadores de comparación
8 > 5 // true
3 < 10 // true
8 >= 5 // true
8 <= 5 // true
8 === 5 // true
8 !== 5 // true

// revisa el código para predecir el resultado

const tazasReservadasHoy = 47;
const maxTazasDia =50;

if (tazasReservadasHoy >= maxTazasDia) {
    console.log("Cerrar reservas del día");
} else {
    console.log("Aún hay disponibilidad");
}

// un pedazo de código que corre, pero está mal

const cantidadTazas = 0;

if (cantidadTazas > 2) {
    console.log ("Solo puede reservar máximo 2 tazas");
} else {
    console.log("Reserva confirmada");
}

// Desafío

const ReservaTazasUsuario1 = 1;
const tazasReservadasMax = 2

if (ReservaTazasUsuario1 >= tazasReservadasMax) {
    console.log("Has agotado tu reserva de tazas por día");
} else {
    console.log("Aún hay tazas dispobnibles para ti");
}
