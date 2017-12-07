import { Controller, GET } from '../../../src';

@Controller('/blogs')
export class MyController {

    @GET('/')
    async index (ctx, next) {
        // ctx.body = { msg: 'hello' };

        return { msg: 'hello' }
    }
}
