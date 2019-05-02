const descripcion = {
    demand: true,
    alias: 'd'
};
const completado = {
    alias: 'c',
}

const argv = require('yargs')
    .command('crear', 'Crea un elemento por hacer ', {
        descripcion
    })
    .command('actualizar', 'Actualiza el estado completado de una tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'Borra un elemento de un arreglo', {
        descripcion
    })

    .command('listar', 'Lista un elemento ', {
        completado
    })

    .help()
    .argv;

    module.exports = {
        argv
    }