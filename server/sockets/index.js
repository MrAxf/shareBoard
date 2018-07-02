const rooms = {};

module.exports = io => {
  io.on('connection', user =>{

    user.on('join', id => {
      user.join(id);
      if(rooms[id]){
        for (let i = 0; i < rooms[id].length; i++) {
          user.emit('draw', JSON.stringify(rooms[id][i]));
        }
      } else {
        rooms[id] = [];
      }
    });

    user.on('leave', id => {
      user.leave(id);
    });

    user.on('draw', (data) => {
      const { id, payload } = JSON.parse(data)
      io.to(id).emit('draw', JSON.stringify(payload));
      rooms[id].push(payload);
    });

    user.on('disconect', () => {
      console.log('Disconected');
    });

  });
};