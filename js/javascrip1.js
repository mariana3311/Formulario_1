// para Crear una clave-valor-llave
localStorage.setItem('llave', 'value');

// Ontener el valor de una clave o llave para acceso a datos 
let value = localStorage.getItem('llave');

// sirve Eliminar una clave
localStorage.removeItem('llave');

// sirve Eliminar todas las claves
localStorage.clear();

// Guardar un valor en formato JSON  matriz de 42 almacenamiento
value = JSON.stringify({"llave1": true, "llave2": 42, "llave3": "almacenamiento"});
localStorage.setItem('llave', value);

// Obtener el valor de una cadena guardada en formato JSON
const string = localStorage.getItem('llave');
value = JSON.parse(string);

// Buscar elementos con la clave o llave a los datos 
let keysArray = [];
for (let i = 0; i < localStorage.length; ++i) {
    keysArray.push(localStorage.key(i));
}
console.log(keysArray);

// Constructores 
const success = () => {
    resolve(request.result);
    unlisten();
};
const error = () => {
    reject(request.error);
    unlisten();
};
request.addEventListener('success', success);
request.addEventListener('error', error);


function toTransactionPromise(database, transaction) {
return new Promise((resolve, reject) => {
const unlisten = () => {
    transaction.removeEventListener('success', success);
    transaction.removeEventListener('error', error);
};
const success = (e) => {
    resolve(database, e);
    unlisten();
};
const error = (e) => {
    reject(database, e);
    unlisten();
};
transaction.addEventListener('complete', success);
transaction.addEventListener('error', error);
});
}
var request = indexedDB.open('database', 1);

request.onupgradeneeded = function(e) {
    const database = e.target.result;
}















