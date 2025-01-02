import request from 'supertest'
import server from '../../server/index'

describe('GET /movies', () => {
    it('Should return 200', async () => {
        const response = await request(server)
        .get('/api/v1/movies')
        
        expect(response.statusCode).toBe(200)
    })
})