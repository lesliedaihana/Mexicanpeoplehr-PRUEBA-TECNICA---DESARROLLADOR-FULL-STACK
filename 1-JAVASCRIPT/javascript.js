
function procesarNumeros(numeros) {
    // Validación del input
    if (!Array.isArray(numeros)) {
        throw new Error('El parámetro debe ser un array');
    }
    if (numeros.length === 0) {
        throw new Error('El array no puede estar vacío');
    }
    if (numeros.some(item => typeof item !== 'number' || isNaN(item))) {
        throw new Error('Todos los elementos deben ser números válidos');
    }

    // Filtrar y sumar números pares
    const pares = numeros.filter(num => num % 2 === 0);
    const sumaPares = pares.reduce((acum, num) => acum + num, 0);

    // Filtrar y sumar números impares
    const impares = numeros.filter(num => num % 2 !== 0);
    const sumaImpares = impares.reduce((acum, num) => acum + num, 0);

    // Calcular promedio general
    const sumaTotal = numeros.reduce((acum, num) => acum + num, 0);
    const promedio = sumaTotal / numeros.length;

    // Retornar objeto con resultados
    return {
        pares: sumaPares,
        impares: sumaImpares,
        promedio: promedio
    };
}

// Prueba de la función (Ejercicio 1)
try {
    const resultado = procesarNumeros([1, 2, 3, 4, 5, 6]);
    console.log('Ejercicio 1 - Resultado:', resultado); // { pares: 12, impares: 9, promedio: 3.5 }

    // Casos de prueba adicionales (descomentar para probar errores)
    // console.log(procesarNumeros([])); // Error: Array vacío
    // console.log(procesarNumeros([1, '2', 3])); // Error: No todos son números
    // console.log(procesarNumeros("no array")); // Error: No es array
} catch (error) {
    console.error('Ejercicio 1 - Error:', error.message);
}

// EJERCICIO 2: Async/Await
const usuariosMock = [
    { id: 1, nombre: 'Juan Pérez', email: 'juan.perez@email.com' },
    { id: 2, nombre: 'Ana Gómez', email: 'ana.gomez@email.com' },
    { id: 3, nombre: 'Carlos López', email: 'carlos.lopez@email.com' }
];


function fetchUsuarios() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.2) {
                reject(new Error('Error en API: Servidor no disponible'));
            } else {
                resolve(usuariosMock);
            }
        }, 2000);
    });
}


  //Función asíncrona que consume la API simulada y muestra los resultados.

async function obtenerUsuarios() {
    try {
        console.log('Ejercicio 2 - Iniciando fetch de usuarios...');
        const usuarios = await fetchUsuarios();
        console.log('Ejercicio 2 - Usuarios obtenidos:', usuarios);
    } catch (error) {
        console.error('Ejercicio 2 - Error:', error.message);
    }
}

// Ejecutar Ejercicio 2
obtenerUsuarios();