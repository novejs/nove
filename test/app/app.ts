import { Nove } from '../../src/index';

import { MyController } from './controllers'

const app = new Nove({
    controllers: [MyController]
});

app.listen(3000, () => {
    console.log('server now at: http://localhost:3000/');
})
