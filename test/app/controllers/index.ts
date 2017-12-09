import { Controller, GET, Ctx, State } from '../../../src';

@Controller('/')
export class MyController {

    @GET('/')
    async index () {
        return { a: 1 }
    }
}
