import { Middleware } from 'koa';
import * as KoaRouter from 'koa-router';
import { ServiceDescriptor } from './service-descriptor';
import { NoveRouter } from '../core/nove-router';

/**
 * describe the configuration of controller
 */
export interface ControllerDescriptor {

    /**
     * path that controller serve
     */
    path: string;

    /**
     * sub methods of controller
     */
    services: ServiceDescriptor[];

    /**
     * middlewares that serve before controller
     */
    beforeMiddlewares: Middleware[];

    /**
     * middlewares that serve after controller
     */
    afterMiddlewares: Middleware[];

    /**
     * controller
     */
    self: NoveRouter;
}
