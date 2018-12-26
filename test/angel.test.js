const request = require('supertest')
const app = require('../index')

after(done => {
  app.close(done)
})

describe('api/angel', () => {
  it('returns angels', done => {
    request(app).get('/api/angel')
      .expect(200)
      .expect({ data: [] }, done)
  })
})