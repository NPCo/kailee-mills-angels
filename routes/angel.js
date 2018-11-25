// From Dan's Guides: https://github.com/justsml/guides/tree/master/express/setup-guide
const router = module.exports = require('express').Router()
const Joi = require('joi')

const db = require('monk')(process.env.DB_CONNECTION)
const items = db.get('items') // TODO: move, roughly like: app/db/items.js:

router.get('/', getAll)
router.get('/:id', getOne)
router.post('/', create)
router.put('/:id', update)
router.delte('/', removeAll)
router.delete('/:id', removeOne)


function getAll(req, res, next) {
  items.find({})
    .then(items => res.status(200).send({ data: items }))
    .catch(next)
}

function getOne(req, res, next) {
  items.findOne({ id: req.params.id })
    .then(item => {
      if (!item) return res.status(404).send({ message: 'Item not found.' })
      res.status(200).send({ data: item })
    })
    .catch(next)
}

const angelSchema = Joi.object().keys({

})

function create(req, res, next) {

  const { error } = Joi.validate(req.body.angel, angelSchema)

  return error
    ? next({ status: 400, message: 'Could not create new item.' })
    : items.insert(req.body)
      .then(() => res.status(201).json({ message: 'Success', data: req.body }))
      .catch(next)
}

function update(req, res, next) {
  const { id } = req.params
  items.findOneAndUpdate({ _id: id }, req.body)
    .then(() => res.status(200).json({ message: 'Success', data: req.body }))
    .catch(next)
}

function removeAll(req, res, next) {
  items.remove({})
    .then(() => res.status(200).json({ message: 'Removed' }))
    .catch(next)
}

function removeOne(req, res, next) {
  items.findOneAndDelete({ _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Removed' }))
    .catch(next)
}