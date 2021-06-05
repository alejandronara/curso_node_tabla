const argv = require('yargs')
    .option('b',{
            alias:'base',
            type:'number',
            description:'Representa la base de la tabla',
            demandOption :true
    })
    .check( (argv, options) => {
        if (isNaN(argv.base)) {
            throw new Error("El valor ingresado de la base debe ser numérico.");
        } 
        return true ;// tell Yargs that the arguments passed the check

    })
    .option('l',{
        alias:'listar',
        type:'bolean',
        description:'Indica si la tabla se visualiza por pantalla',
        default :false,
        demandOption :true
    })
    .option('h',{
            alias:'hasta',
            type:'number',
            description:'Indica hasta que número voy a multiplicar',
            demandOption :true
    })
    .check( (argv, options) => {
        if (isNaN(argv.hasta)) {
            throw new Error("El valor ingresado de la base debe ser numérico.");
        } 
        return true ;// tell Yargs that the arguments passed the check

    })
    .argv;

    module.exports = {
        argv
    };