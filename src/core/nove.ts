/**
 * Main application
 * 
 * @example
 *   import { Nove } from 'nove';
 *   const app = new Nove(options);
 * 
 */
import * as Koa from 'koa';
import { Server } from 'http';
import { setupRouter } from '../drivers/setup-router';
import { NoveOptions } from '../interfaces';

export class Nove {
    app: Koa = null;

    constructor (options: NoveOptions) {
        this.app = new Koa();

        setupRouter(this.app, options);
    }

    /* istanbul ignore next */
    public listen (...args): Server {
        if (this.app === null) {
            throw new Error('⨯ Cannot call .listen before Nove be initialized.');
        }

        return this.app.listen(...args);
    }
}
