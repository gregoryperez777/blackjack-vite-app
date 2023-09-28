import _ from 'underscore';


// Existen 2 formas de exportar una funcionalida 
// 1- Exportacion Individual    -> Al momento de importar | import { module } from 'path'
// 2- Exportacion por defecto   -> Al momento de importar | import module from 'path'

// Tambien es posible colocar alias a los modulos importados

// import { module  as moduleA } from 'path'
// import module as moduleB from 'path'


// Exportacion individual
// export const miName = 'Gregory';



/**
 * Esta funcion crea un nuevo deck
 * @param {Array<string>} tiposDeCarta Ejemplo: ['C','D','H','S']
 * @param {Array<string>} tiposEspeciales Ejemplo: ['A','J','Q','K']
 * @returns {Array<string>} Retorna un nuevo deck de cartas
 */
export const crearDeck = (tiposDeCarta, tiposEspeciales) => {

    let deck = [];

    if (!tiposDeCarta || tiposDeCarta.length === 0)
        throw new Error('tiposDeCarta es obligatorio como un arreglo de string');

    if (!tiposEspeciales || tiposEspeciales.length === 0)
        throw new Error('tiposEspeciales es obligatorio como un arreglo de string');

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCarta ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }

    deck = _.shuffle( deck );
    return deck;
}

// Exportacion por defecto
// export default crearDeck;
