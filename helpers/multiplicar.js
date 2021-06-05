const fs = require('fs');

/*   const crearArchivo = (base = 5) =>{
    let arrayRta = {respuesta:false, mensaje:''};
    let salida = "";


    for(let a=1; a <=10 ; a++){
        salida += ( `La tabla del ${base} es así ${base} x ${ a} = ${base *a}\n`);
    }   

    try{
        fs.writeFileSync(`tabla-${ base }.txt`, salidas);
        arrayRta.mensaje  = 'Archivo generado correctamente';
        arrayRta.respuesta = true;
    } catch(error){
        arrayRta.mensaje  = error;
        arrayRta.respuesta = false;
        throw error;
    }
    
    return arrayRta;
};
 */

/*
    La funcion al ser del tipo ASYNC retona una promesa por lo que el callback ya no es necesario
*/

const crearArchivo = async (arrayData) =>{

    //return new Promise ((resolve, reject) =>{

        let arrayRta = {respuesta:false, mensaje:''};
        let salida = "";
    
    
        for(let a=1; a <=arrayData.hasta ; a++){
            salida += ( `La tabla del ${arrayData.base} es así ${arrayData.base} x ${ a} = ${arrayData.base *a}\n`);
        }   

        if(arrayData.listar){
            console.log(salida);
        }
        

        fs.writeFileSync(`./salida/tabla-${ arrayData.base }.txt`, salida);

        try{
            //resolve('Archivo Grabado Correctamente');
            return  `tabla-${ arrayData.base }.txt`;
        }catch(error){
            return error;
        }
        




   // })


};


module.exports = {
    crearArchivo
} 