// From Dan's Guides: https://github.com/justsml/guides/tree/master/express/setup-guide
const router = module.exports = require('express').Router()
const Joi = require('joi')

const monk = require('monk')
const readonlyDB = monk(process.env.DB_READ_CONNECTION)
const getCollection = req =>
  (!!req.query.isDraft && req.query.isDraft === 'true')
    ? process.env.DRAFT_COLLECTION
    : process.env.COLLECTION

const credentialSchema = Joi.object().keys({
  username: Joi.string().alphanum().min(8).max(32).required(),
  password: Joi.string().alphanum().min(8).max(32).required()
})

const validateThen = f => (req, res, next) => {

  // console.log(JSON.stringify(req.body, null, 2))

  const { error } = Joi.validate(req.body.credentials, credentialSchema, { presence: 'required' })
  
  if (error)
    return res.status(401).json({ message: 'Incorrect credentials.' })

  const connection = process.env.DB_EDIT_CONNECTION
    .replace('<user>', req.body.credentials.username)
    .replace('<pass>', req.body.credentials.password)

  return f(req, res, next, monk(connection))
}

router.get('/', getAll)
router.get('/:id', getOne)
router.post('/', validateThen(create))
// router.put('/:id', update)
router.delete('/', validateThen(removeAll))
router.delete('/:id', validateThen(removeOne))


function getAll(req, res, next) {
  readonlyDB.get(getCollection(req))
    .find({})
    .then(items => res.status(200).json({ data: items }))
    .catch(err => res.status(500).json({ message: 'Could not get all items.' }))
}

function getOne(req, res, next) {
  readonlyDB.get(getCollection(req))
    .findOne({ id: req.params.id })
    .then(item => {
      if (!item) return res.status(404).json({ message: 'Item not found.' })
      res.status(200).json({ data: item })
    })
    .catch(err => res.status(500).json({ message: 'Could not get item.' }))
}

const angelSchema = Joi.array().items(Joi.object().keys({
  x: Joi.number().integer().min(1).max(100),
  y: Joi.number().integer().min(1).max(100),
  w: Joi.number().integer().min(1).max(100),
  h: Joi.number().integer().min(1).max(100),
  name: Joi.string().max(100),
  dates: Joi.string().max(100),
  color: Joi.string().regex(/#([\da-fA-F]{2})([\da-fA-F]{2})([\da-fA-F]{2})/),
  thumbnail: Joi.string().regex(/((\w+:\/\/)[-a-zA-Z0-9:@;?&=/%+.*!'(),$_{}^~[\]`#|]+)/),
  photo: Joi.string().regex(/((\w+:\/\/)[-a-zA-Z0-9:@;?&=/%+.*!'(),$_{}^~[\]`#|]+)/),
  bio: Joi.string().max(100000)
}))

function create(req, res, next, db) {

  const { val, error } = Joi.validate(req.body.angels, angelSchema)
  
  return error
    ? res.status(500).json({ message: 'Could not create new items.' })
    : db.get(getCollection(req))
      .insert(val)
      .then(() => console.log('created items'))
      .then(() => res.status(201).json({ message: 'Success', data: req.body }))
      .catch(err => res.status(500).json({ message: 'Could not create new items.' }))
      .finally(() => db.close())
}

// function update(req, res, next, editableAngels) {
//   const { id } = req.params
//   editableAngels.findOneAndUpdate({ _id: id }, req.body)
//     .then(() => res.status(200).json({ message: 'Success', data: req.body }))
//     .catch(next)
// }

function removeAll(req, res, next, db) {
  db.get(getCollection(req))
    .remove({})
    .then(() => console.log('removed items'))
    .then(() => res.status(200).json({ message: 'Removed All' }))
    .catch(err => res.status(500).json({ message: 'Could not remove all items.' }))
    .finally(() => db.close())
}

function removeOne(req, res, next, db) {
  db.get(getCollection(req))
    .findOneAndDelete({ _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Removed' }))
    .catch(err => res.status(500).json({ message: 'Could not remove item.' }))
    .finally(() => db.close())
}