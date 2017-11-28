const uuid = require('uuid/v4')

const turtles = []

let getOne = (data, id) => {
  return data.find(el => el.id === id)
}

let create = (species, name) => {
  const turtle = { id: uuid(), species, name }
  turtles.push(turtle)
  return turtle
}

let change = (name, breed, turtle) => {
  const index = turtles.indexOf(turtle)
  turtles[turtle] = {id: turtle.id, species, name}
  return turtles[index]
}

let deleteOne = (turtle) => {
  return turtles.splice(turtles.indexOf(turtle), 1)
}

module.exports = {getOne, create, change, deleteOne}
