const request = require('supertest')
const app = require('../index')

describe('app', () => {

  after(done => {
    app.close(done)
  })

  describe('/', () => {
    specify('GET / returns html', done => {
      request(app).get('/')
        .expect(200)
        .expect(/html/, done)
    })
  })

  describe('/edit', () => {
    specify('GET /edit returns html', done => {
      request(app).get('/')
        .expect(200)
        .expect(/html/, done)
    })
  })

  describe('api/angel', () => {
    specify('GET returns angels', done => {
      request(app).get('/api/angel')
        .expect(200)
        .expect({ data: [] }, done)
    })
    specify('POST requires credentials', done => {
      request(app).post('/api/angel')
        .expect(401, done)
    })
    specify('POST requires credentials', done => {
      request(app).post('/api/angel')
        .send({ credentials: { username: '', password: '' } })
        .expect(401, done)
    })
    specify('POST rejects incorrect credentials', done => {
      request(app).post('/api/angel')
        .send({ credentials: { username: '12345678a', password: '12345678a' } })
        .expect(401, done)
    })
    specify('POST authenticates', done => {
      request(app).post('/api/angel')
        .send({ credentials: { username: process.env.DB_EXAMPLE_USER, password: process.env.DB_EXAMPLE_PASS } })
        .expect(404, done)
    })
  })

})