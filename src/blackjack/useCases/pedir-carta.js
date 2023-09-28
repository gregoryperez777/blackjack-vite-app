
/**
 * Esta funcion toma una carta de la baraja
 * @param { Array<string> } deck Ejemplo: ['10S', '2D', '6D' ... ]
 * @returns string Ejemplo '10S'
 */
export const pedirCarta = (deck) => {

    if ( !deck || deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}