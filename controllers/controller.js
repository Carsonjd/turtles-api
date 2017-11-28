const db = require('../src/turtles.js')

let sendAll = (req,res,next) => {
  let data = db.turtles
  res.status(200).json({ data })
}

let sendOne = (req,res,next) => {
  const turtle = db.getOne(db.turtles, req.params.id)
  if (!turtle) return next({ status: 404, message: `Could not find turle with id ${req.params.id}` })
  res.status(200).json({ data: turtle })
}

let sendNew = (req,res,next) => {
  const { species, name } = req.body
  if (!name || !breed) return next({ status: 400, message: `Requisite information omitted` })

  let turtle = db.create(species, name)
  res.status(201).json({ data: turtle })
}

let sendChange = (req, res, next) => {
  const id = req.params.id
  const turtle = db.getOne(db.turtles, id)
  if (!turtle) return next({ status: 404, message: `${id} invalid` })

  const { species, name } = req.body
  if (!species || !name) return next({ status: 400, message: `Species and name are required` })

  let result = db.change(species, name, turtle)
  res.status(200).json({ data: result })
}

let sendDelete = (req, res, next) => {
  const id = req.params.id
  const turtle = db.getOne(db.turtles, id)
  if (!turtle) return next({ status: 404, message: `${id} invalid` })

  db.deleteOne(turtle)
  res.status(204).json()
}

module.exports = {sendAll, sendOne, sendNew, sendChange, sendDelete}
