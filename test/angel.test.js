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
    describe('GET', () => {
      it('returns angels', done => {
        request(app).get('/api/angel')
          .expect(200)
          .expect({ data: [] }, done)
      })
    })
    describe('DELETE', () => {
      it('requires credentials', done => {
        request(app).delete('/api/angel')
          .expect(/Credentials required/)
          .expect(401, done)
      })
      it('requires credentials', done => {
        request(app).delete('/api/angel')
          .send({ credentials: { username: '', password: '' } })
          .expect(/Credentials required/)
          .expect(401, done)
      })
      it('rejects incorrect credentials', done => {
        request(app).delete('/api/angel')
          .send({ credentials: { username: '12345678a', password: '12345678a' } })
          .expect(/Invalid Credentials/)
          .expect(401, done)
      })
    })
    describe('POST', () => {
      const angels = [ { x: 1, y: 1, w: 1, h: 1 } ]
      it('requires valid angels', done => {
        request(app).post('/api/angel')
          .send({ angels: [ {} ] })
          .expect(/Invalid angels/)
          .expect(400, done)
      })
      it('requires valid angels and requires credentials', done => {
        request(app).post('/api/angel')
          .send({ angels })
          .expect(/Credentials required/)
          .expect(401, done)
      })
      it('requires credentials', done => {
        request(app).post('/api/angel')
          .send({ credentials: { username: '', password: '' } })
          .expect(/Credentials required/)
          .expect(401, done)
      })
      it('rejects incorrect credentials', done => {
        request(app).post('/api/angel')
          .send({ credentials: { username: '12345678a', password: '12345678a' } })
          .expect(/Invalid Credentials/)
          .expect(401, done)
      })
    })
  })

})