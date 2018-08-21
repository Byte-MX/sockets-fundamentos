const { io } = require('../server');

io.on('connection', (client) => {
    //console.log('Usuario conectado:' + client);
    console.log('Usuario conectado.');

    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'Bienvenido a esta aplicación'
    });

    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });

    // Escuchar al cliente
    client.on('enviarMensaje', (data, callback) => {
        console.log(data);

        client.broadcast.emit('enviarMensaje', data);
        /*  if (data.usuario) {
              callback({
                  resp: 'TODO SALIO BIEN!'
              });
          } else {
              callback({
                  resp: 'TODO SALIO MAL!!!'
              });
          }*/
    });
});