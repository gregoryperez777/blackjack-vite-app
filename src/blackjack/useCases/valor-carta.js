
/**
 * Esta funcion regresa el valor de la carta
 * @param {string} carta Ejemplo: '10S'
 * @returns number Ejemplo 1 - 11
 */
export const valorCarta = ( carta ) => {

    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}