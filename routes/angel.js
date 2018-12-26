// From Dan's Guides: https://github.com/justsml/guides/tree/master/express/setup-guide
const router = module.exports = require('express').Router()

const Joi = require('joi')
const monk = require('monk')

const getCollectionName = (req, res, next) => {

  const collectionName = (!!req.query.isDraft && req.query.isDraft === 'true')
    ? process.env.DRAFT_COLLECTION
    : process.env.COLLECTION

  res.locals.collectionName = collectionName
  next()
}

const readonlyDB = monk(process.env.DB_READ_CONNECTION)
const getReadConnection = (req, res, next) => {

  res.locals.db = readonlyDB
  res.locals.collection = readonlyDB.get(res.locals.collectionName)

  next()
}

const getAllAngels = (req, res, next) => {
  res.locals.collection
    .find({})
    .then(items => res.json({ data: items }))
    .catch(err => console.log(err) || res.status(500).json(err))
}

router.route('/')
  .all(getCollectionName)
  .get(getReadConnection, getAllAngels)
  .post((req, res, next) => console.log('posting!') || next())
  .delete((req, res, next) => console.log('deleting!') || next())

// const credentialSchema = Joi.object().keys({
//   username: Joi.string().alphanum().min(8).max(32).required(),
//   password: Joi.string().alphanum().min(8).max(32).required()
// })

// const validateThen = f => (req, res, next) => {

//   const { error } = Joi.validate(req.body.credentials, credentialSchema, { presence: 'required' })
  
//   if (error)
//     return res.status(401).json({ message: 'Incorrect credentials.' })

//   const connection = process.env.DB_EDIT_CONNECTION
//     .replace('<user>', req.body.credentials.username)
//     .replace('<pass>', req.body.credentials.password)

//   return f(req, res, next, monk(connection))
// }


// const angelSchema = Joi.array().items(Joi.object().keys({
//   x: Joi.number().integer().min(1).max(100),
//   y: Joi.number().integer().min(1).max(100),
//   w: Joi.number().integer().min(1).max(100),
//   h: Joi.number().integer().min(1).max(100),
//   name: Joi.string().max(100),
//   dates: Joi.string().max(100),
//   color: Joi.string().regex(/#([\da-fA-F]{2})([\da-fA-F]{2})([\da-fA-F]{2})/),
//   thumbnail: Joi.string().regex(/((\w+:\/\/)[-a-zA-Z0-9:@;?&=/%+.*!'(),$_{}^~[\]`#|]+)/),
//   photo: Joi.string().regex(/((\w+:\/\/)[-a-zA-Z0-9:@;?&=/%+.*!'(),$_{}^~[\]`#|]+)/),
//   bio: Joi.string().max(100000)
// }))

// function create(req, res, next, db) {

//   const { error } = Joi.validate(req.body.angels, angelSchema)
  
//   return error
//     ? res.status(500).json({ message: 'Could not create new items.' })
//     : db.get(getCollection(req))
//       .insert(req.body.angels)
//       .then(() => console.log('created items'))
//       .then(() => res.status(201).json({ message: 'Success', data: req.body }))
//       .catch(err => res.status(500).json({ message: 'Could not create new items.' }))
//       .finally(() => db.close())
// }

// function removeAll(req, res, next, db) {
//   console.log('attempting removeAll!')
//   res.status(200).json({ message: 'Removed All' })
//   db.get(getCollection(req))
//     .remove({})
//     .then(() => console.log('removed items'))
//     .then(() => res.status(200).json({ message: 'Removed All' }))
//     .catch(err => res.status(500).json({ message: 'Could not remove all items.' }))
//     .finally(() => db.close())
// }