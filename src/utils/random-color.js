function random() {
  return parseInt(Math.random() * 256);
}

export default function randomColor() {
  return `rgb(${random()},${random()},${random()})`
}
