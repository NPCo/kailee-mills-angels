// From Dan's Guides: https://github.com/justsml/guides/tree/master/express/setup-guide
const router = module.exports = require('express').Router()
const Joi = require('joi')

const monk = require('monk')
const readonlyDB = monk(process.env.DB_CONNECTION)
const angels = readonlyDB.get('angels')

const credentialSchema = Joi.object().keys({
  username: Joi.string().alphanum().min(8).max(32).required(),
  password: Joi.string().alphanum().min(8).max(32).required()
})

const validateThen = f => (req, res, next) => {

  const { error } = Joi.validate(req.body.credentials, credentialSchema)

  if (error)
    return next({ status: 401, message: 'Incorrect credentials.' })

  const connection = process.env.DB_EDIT_CONNECTION
    .replace('<user>', req.body.credentials.username)
    .replace('<pass>', req.body.credentials.password)

  return f(req, res, next, monk(connection))
}

router.get('/', getAll)
router.get('/:id', getOne)
router.post('/', validateThen(create))
// router.put('/:id', update)
router.delte('/', validateThen(removeAll))
router.delete('/:id', validateThen(removeOne))


function getAll(req, res, next) {
  angels.find({})
    .then(items => res.status(200).send({ data: items }))
    .catch(next)
}

function getOne(req, res, next) {
  angels.findOne({ id: req.params.id })
    .then(item => {
      if (!item) return res.status(404).send({ message: 'Item not found.' })
      res.status(200).send({ data: item })
    })
    .catch(next)
}


const angelSchema = Joi.object().keys({

})

function create(req, res, next, db) {

  const { error } = Joi.validate(req.body.angel, angelSchema)

  return error
    ? next({ status: 400, message: 'Could not create new item.' })
    : db.get('angels')
      .insert(req.body.angel)
      .then(() => res.status(201).json({ message: 'Success', data: req.body }))
      .catch(next)
      .finally(() => db.close())
}

// function update(req, res, next, editableAngels) {
//   const { id } = req.params
//   editableAngels.findOneAndUpdate({ _id: id }, req.body)
//     .then(() => res.status(200).json({ message: 'Success', data: req.body }))
//     .catch(next)
// }

function removeAll(req, res, next, db) {
  db.get('angels')
    .remove({})
    .then(() => res.status(200).json({ message: 'Removed All' }))
    .catch(next)
    .finally(() => db.close())
}

function removeOne(req, res, next, db) {
  db.get('angels')
    .findOneAndDelete({ _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Removed' }))
    .catch(next)
    .finally(() => db.close())
}