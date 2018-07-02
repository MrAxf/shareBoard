import io from 'socket.io-client'

const socket = io()

const callbacks = {
  onDraw(cb){
    socket.on('draw', cb)
    return callbacks
  }
}

export const subscribe = (id) => {
  socket.emit('join', id)
  return callbacks
}

export const unsubscribe = (id) => {
  socket.removeAllListeners('draw')
  socket.emit('leave', id)
}

export const emitDraw = (id, oX, oY, dX, dY, size, color) => {
  socket.emit('draw', JSON.stringify({id, "payload":{ oX, oY, dX, dY, size, color } }))
}