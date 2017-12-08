import { Controller, GET, Ctx, State } from '../../../src';

@Controller('/blogs')
export class MyController {

    @GET('/')
    async index (@Ctx() ctx: any, @State() state) {
        this.a();

        return { a: 1 }
    }

    a () {
        console.log('aaaaaa');
    }
}
