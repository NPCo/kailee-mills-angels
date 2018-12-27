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
  res.locals.collection = res.locals.db.get(res.locals.collectionName)

  next()
}

const getAllAngels = (req, res, next) => {
  res.locals.collection
    .find({})
    .then(items => res.status(200).json({ data: items }))
    .catch(error => res.status(500).json({ error: 'Database cannot get angels.' }))
}

const getCredentials = (req, res, next) => {

  const credentialSchema = Joi.object().keys({
    username: Joi.string().alphanum().min(1).max(32).required(),
    password: Joi.string().alphanum().min(1).max(32).required()
  })

  const { error } = Joi.validate(req.body.credentials, credentialSchema, { presence: 'required' })

  if (error) return res.status(401).json({ error: 'Credentials required.' })

  res.locals.credentials = req.body.credentials
  next()
}

const authenticateAndConnect = (req, res, next) => {

  const connectionURL = process.env.DB_EDIT_CONNECTION
    .replace('<user>', res.locals.credentials.username)
    .replace('<pass>', res.locals.credentials.password)

  monk(connectionURL)
    .then(db => { res.locals.db = db })
    .then(() => { res.locals.collection = res.locals.db.get(res.locals.collectionName) })
    .then(() => next())
    .catch(error => res.status(401).json({ error: 'Invalid Credentials.' }))
}

const removeAllAngels = (req, res, next) => {
  res.locals.collection.remove({})
    .then(message => res.status(200).json({ success: 'Removed all angels.' }))
    .catch(error => res.status(500).json({ error: 'Database cannot remove angels.' }))
    .finally(() => res.locals.db.close())
}

const verifyAngels = (req, res, next) => {
  
  const angelSchema = Joi.array().min(1).max(100).items(
    Joi.object().keys({
      x: Joi.number().integer().min(1).max(100).required(),
      y: Joi.number().integer().min(1).max(100).required(),
      w: Joi.number().integer().min(1).max(100).required(),
      h: Joi.number().integer().min(1).max(100).required(),
      name: Joi.string().max(100),
      dates: Joi.string().max(100),
      color: Joi.string().regex(/#([\da-fA-F]{2})([\da-fA-F]{2})([\da-fA-F]{2})/),
      thumbnail: Joi.string().regex(/((\w+:\/\/)[-a-zA-Z0-9:@;?&=/%+.*!'(),$_{}^~[\]`#|]+)/),
      photo: Joi.string().regex(/((\w+:\/\/)[-a-zA-Z0-9:@;?&=/%+.*!'(),$_{}^~[\]`#|]+)/),
      bio: Joi.string().max(10000)
    })
  )

  const { error } = Joi.validate(req.body.angels, angelSchema)
  if (error) return res.status(400).json({ error: 'Invalid angels.' })

  res.locals.angels = req.body.angels
  next()
}

const insertAngels = (req, res, next) => {
  res.locals.collection.insert(res.locals.angels)
    .then(message => res.status(200).json({ success: 'Inserted all angels.' }))
    .catch(error => res.status(500).json({ error: 'Database cannot remove angels.' }))
    .finally(() => res.locals.db.close())
}

router.route('/')
  .all(getCollectionName)
  .get(getReadConnection, getAllAngels)
  .delete(getCredentials, authenticateAndConnect, removeAllAngels)
  .post(verifyAngels, getCredentials, authenticateAndConnect, insertAngels)