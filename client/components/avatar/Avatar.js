import React from 'react'

import './avatar.scss'

export default ({username, size, className}) => {
  const avatarPallete = [
    "4d0000",
    "1f4d00",
    "00214d",
    "af9f0d",
    "6a0074"
  ]
  const style = {
    "width": `${size}px`,
    "height": `${size}px`,
    "lineHeight": `${size}px`,
    "fontSize": `${size - (size/2)}px`,
    "backgroundColor": `#${avatarPallete[username.length%avatarPallete.length]}`
  }
  return (
    <div className={`avatar ${className}`} style={style} title={`Logged in as ${username}`}>
      {username.substring(0,2)}
    </div>
  )
}
