
let provincia = 'Córdoba'
//Objetos literales y los Array

let empleados = [
    {
        nombre: 'Juan',
        apellido: 'Pedreo',
        edad: 35,
    },
    {
        nombre: 'Ana',
        apellido: 'Zorongo',
        edad: 28,
    },
    {
        nombre: 'Zaraza',
        apellido: 'Zurubí',
        edad: 35,
    }
];

//Acceso al ultimo elemento del Array
let ultimoEmpleado = empleados[empleados.length -1 ];
console.log(ultimoEmpleado);
alert(ultimoEmpleado.nombre);
alert(ultimoEmpleado.apellido);

let otroEmpleado = {
    nombre: 'Pepe',
    apellido: 'Argento',
    edad: 55,
};

//Método que agrega elementos al Array-Push
empleados.push(otroEmpleado);
let ultimoEmpleadoNuevo = empleados[empleados.length -1 ];
console.log(ultimoEmpleadoNuevo);

empleados.push({nombre: 'Juan Carlos', apellido: 'Bodoque', edad: 43});

console.log(empleados);

console.table(empleados);

//Nuevo Array
let clientes = ['Juanjo' , 'Roberta', 'Marroc'];

document.getElementById('Caja').innerHTML = clientes;

let productos = ['gaseods', 'caca', 'vino'];

//Uso método de concatenar los array
let nuevoarray = clientes.concat(productos);

console.log(nuevoarray);

document.getElementById('clientes').innerHTML = nuevoarray;

let unaParte = nuevoarray.slice(2);

console.log(unaParte);

document.getElementById('clientes')

