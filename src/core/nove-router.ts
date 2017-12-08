import * as KoaRouter from 'koa-router';
import { IRouterOptions } from 'koa-router';
import { Middleware } from 'koa';
import { ControllerDescriptor, ServiceDescriptor } from '../interfaces';
import { ReturnProxy } from '../drivers';

export class NoveRouter {
    root: KoaRouter = null;

    /**
     * create a router
     * @param {IRouterOptions} options configuration of koa router
     */
    constructor (options: IRouterOptions) {
        this.root = new KoaRouter(options);
    }

    /**
     * setup middleware(s) to router
     * @param {Middleware[]} middlewares
     */
    public setupMiddlewares (middlewares: Middleware[]) {
        middlewares && this.root.use(...middlewares);
        return this;
    }

    /**
     * setup controller(s) to router
     * @param {ControllerDescriptor[]} controllers
     */
    public setupControllers (controllers: ControllerDescriptor[]) {
        controllers.forEach(controller => {
            const {
                path,
                beforeMiddlewares = [],
                afterMiddlewares = [],
                self
            } = controller;

            this.root.use(path, ...[
                ...beforeMiddlewares,
                self.routes(),
                ...afterMiddlewares
            ])
        });

        return this;
    }

    /**
     * setup services(s) to router
     * @param {ServiceDescriptor[]} services
     */
    public setupService (services: ServiceDescriptor[]) {
        services.forEach(service => {
            const {
                path,
                beforeMiddlewares = [],
                afterMiddlewares = [],
                method,
                returnDescriptor,
                fn,
                params,
                parent
            } = service;

            this.root[method](path, ...[
                ...beforeMiddlewares,
                ReturnProxy(fn, returnDescriptor, params, parent),
                ...afterMiddlewares
            ])
        });

        return this;
    }

    public routes () {
        return this.root.routes();
    }
}
