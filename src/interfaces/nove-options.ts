/**
 * options interface of Nove constructor
 */
import { Middleware } from 'koa';
import { IRouterOptions } from 'koa-router';

export interface NoveOptions extends IRouterOptions {
    /**
     * controllers
     * there must be at least one controller
     */
    controllers: Function[];

    /**
     * middlewares use before controllers and routers
     */
    beforeMiddlewares?: Middleware[];

    /**
     * middlewares use after controllers and routers
     */
    afterMiddlewares?: Middleware[];

    /**
     * alias of `useAfter`
     */
    use?: Middleware[];
}
