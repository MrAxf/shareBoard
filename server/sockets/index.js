module.exports = io => {
  io.on('connection', user =>{

    user.on('join', id => {
      user.join(id);
    });

    user.on('leave', id => {
      user.leave(id);
    });

    user.on('draw', (data) => {
      const { id, payload } = JSON.parse(data)
      io.to(id).emit('draw', JSON.stringify(payload));
    });

    user.on('disconect', () => {
      console.log('Disconected');
    });

  });
};