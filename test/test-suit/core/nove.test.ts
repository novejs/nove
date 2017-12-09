import { Nove, Controller, GET } from '../../../src';
import * as request from 'supertest';

describe('create koa application', () => {
    test('respond with json', done => {
        @Controller('/')
        class MyController {
          @GET('/')
          async index () {
            return { name: 'Jason' };
          }
        }
        
        const app = new Nove({
            controllers: [MyController]
        }).app;

        request(app.callback())
            .get('/')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
});
