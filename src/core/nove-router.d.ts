/// <reference types="koa-router" />
/// <reference types="koa" />
import * as KoaRouter from 'koa-router';
import { IRouterOptions } from 'koa-router';
import { Middleware } from 'koa';
import { ControllerDescriptor, ServiceDescriptor } from '../interfaces';
export declare class NoveRouter {
    root: KoaRouter;
    constructor(options: IRouterOptions);
    setupMiddlewares(middlewares: Middleware[]): this;
    setupControllers(controllers: ControllerDescriptor[]): this;
    setupService(services: ServiceDescriptor[]): this;
    routes(): KoaRouter.IMiddleware;
}
