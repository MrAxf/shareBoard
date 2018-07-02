const brush = {
  size: 3,
  color: "#fff"
}

export const setBrush = (size = brush.size, color = brush.color) => {
  brush.size = size
  brush.color = color
}

export const getBrush = () => ({...brush})