import io from 'socket.io-client'

const socket = io()

const callbacks = {
  onDraw(cb){
    socket.on('draw', cb)
    return this
  }
}

export const subscribe = (id) => {
  socket.emit('join', id)
  return callbacks
}

export const emitDraw = (id, oX, oY, dX, dY) => {
  socket.emit('draw', JSON.stringify({id, "payload":{ oX, oY, dX, dY } }))
}