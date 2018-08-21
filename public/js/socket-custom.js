var socket = io();

socket.on('connect', function() {
    console.log('Conectado al servidor.');
});
// On es para escuchar sucesos.
socket.on('disconnect', function() {
    console.log('Se perdió la conexión con el servidor.');
});

// Emit es para enviar información.
socket.emit('enviarMensaje', {
    usuario: 'Alberto',
    mensaje: 'Hola Mundo'
}, function(resp) {
    //console.log('Se disparó el callback');
    console.log('Respuesta del servidor:', resp);
});

// Escuchar información.
socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor: ', mensaje);
});