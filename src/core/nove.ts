/**
 * Main application
 * 
 * @example
 *   import { Nove } from 'nove';
 *   const app = new Nove(options);
 * 
 */
import * as Koa from 'koa';
import { setupRouter } from '../drivers/setup-router';
import { NoveOptions } from '../interfaces';

export class Nove {
    app: Koa = null;

    constructor (options: NoveOptions) {
        this.app = new Koa();

        setupRouter(this.app, options);
    }

    public listen (...args) {
        if (this.app === null) {
            throw new Error('⨯ Cannot call .listen before Nove be initialized.');
        }

        return this.app.listen(...args);
    }
}
