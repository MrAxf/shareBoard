module.exports = io => {
  io.on('connection', socket =>{

    socket.on('join', id => {
      socket.join(id);
    });

    socket.on('draw', (data) => {
      const { id, payload } = JSON.parse(data)
      io.to(id).emit('draw', JSON.stringify(payload));
    });

    socket.on('disconect', () => {
      console.log('Disconected');
    });

  });
};