const fs = require('fs');

let listadoPorHacer = [];

const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile('./db/data.json', data, function (err) {
        if (err) throw err;
        console.log('Saved!');
    });

}

const cargarDB = () => {
    try {
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }

}

const crear = (descripcion) => {

    cargarDB();

    let porHacer = {
        descripcion,
        completado: false
    };

    listadoPorHacer.push(porHacer);
    guardarDB();
    return porHacer;
}

const getListado = ( completado ) => {
    cargarDB();
    if (completado === undefined) {
        return listadoPorHacer;
    }
    return listadoPorHacer.filter(tarea => {
        return tarea.completado === JSON.parse(completado)
    })
}

const actualizar = (descripcion, completado = true) => {
    cargarDB();
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion)
    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true
    } else {
        return false
    }
}

const borrar = (descripcion) => {
    cargarDB();
    let nuevoListado = listadoPorHacer.filter(tarea => tarea.descripcion !== descripcion)
    if (listadoPorHacer.length === nuevoListado.length) {
        return false;
    } else {
        listadoPorHacer = nuevoListado;
        guardarDB();
        return true;
    }
}


module.exports = {
    crear,
    guardarDB,
    getListado,
    actualizar,
    borrar
}



// let index = listadoPorHacer.findIndex( tarea  =>{
//     return tarea.descripcion === descripcion; 
// })
// if( index >= 0 ){
//     listadoPorHacer[index].competado = competado;
//     guardarDB();
//     return true;
// }else{
//     return false
// }