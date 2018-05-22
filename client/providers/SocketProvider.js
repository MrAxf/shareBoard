import io from 'socket.io-client'

const socket = io()

export const subscribe = (id, onDraw ) => {
  socket.on('connect', () => socket.emit('join', id))
  socket.on('draw', onDraw)
}

export const emitDraw = (id, oX, oY, dX, dY) => {
  socket.emit('draw', JSON.stringify({id, "payload":{ oX, oY, dX, dY } }))
}