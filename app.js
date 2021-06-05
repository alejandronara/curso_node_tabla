console.clear();

const {crearArchivo } = require('./helpers/multiplicar.js');
const {argv } = require('./config/jargs.js');

var colors = require('colors');



                

console.clear();
console.log(argv);

console.log(("la base es "+argv.base + " y el listado es" + (argv.l ? " verdadero " :" falso")).green);
/*
let [,,base = 'base= 99'] = process.argv;

base = base.split("=")[1];
console.log('base es '+base);

// const base = 7;
*/

let arrayData = {base:argv.base, listar: argv.listar, hasta: argv.hasta};

crearArchivo(arrayData)
        .then(mensaje => {
            console.log(mensaje);	
        })
        .catch(err => console.log(err ));

//console.log(`Observemos la tabla del ${ base }\n`);
