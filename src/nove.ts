/**
 * Main application
 * 
 * @example
 *   import { Nove } from 'nove';
 *   const app = new Nove(options);
 * 
 */
import 'reflect-metadata';
import * as Koa from 'koa';
import { NoveRouter } from './drivers';
import { NoveOptions, ControllerDescriptor, ServiceDescriptor } from './interfaces';
import { exposeControllerMetadata, exposeServiceMetadata } from './metadatas';

export class Nove {
    app = null;

    constructor (options: NoveOptions) {
        this.app = new Koa();

        const controllers = options.controllers.map(controller => {
            const metadata = exposeControllerMetadata(controller);
            const _proto = controller.prototype;
            
            const services = Object
                                .getOwnPropertyNames(_proto)
                                .filter(m => m !== 'constructor')
                                .map(serviceName => {
                                    const service = _proto[serviceName];
                                    const subMetadata = exposeServiceMetadata(service) as ServiceDescriptor;

                                    subMetadata.fn = service;

                                    return subMetadata;
                                }) as ServiceDescriptor[];

            const self = this.initSubRouter(services);

            return Object.assign({}, metadata, { services, self });
        }) as ControllerDescriptor[];

        this.initRootRouter(options, controllers);
    }

    public listen (...args) {
        if (this.app === null) {
            throw new Error('⨯ Cannot call .listen before Nove be initialized.');
        }

        return this.app.listen(...args);
    }

    protected initRootRouter (options: NoveOptions, controllers: ControllerDescriptor[]) {
        const rootRouter = new NoveRouter(options);

        rootRouter
            .setupMiddlewares(options.beforeMiddlewares)
            .setupControllers(controllers)
            .setupMiddlewares(options.afterMiddlewares)

        this.app.use(rootRouter.routes());
    }

    protected initSubRouter (services: ServiceDescriptor[]) {
        const subRouter = new NoveRouter({});

        subRouter.setupService(services)

        return subRouter;
    }

    // private serveRouter (controllers) {
    //     const router = new NoveRouter({});
    //     controllers.forEach(c => this.serveControllerRouter(router, c));
    //     return router;
    // }

    // private serveControllerRouter (rootRouter: KoaRouter, controller) {
    //     const servePath = Reflect.getMetadata(MetaDataKeys.PATH, controller);
    //     const router = new KoaRouter();
    //     const _proto = controller.prototype;
        
    //     Object
    //         .getOwnPropertyNames(_proto)
    //         .filter(m => m !== 'constructor')
    //         .forEach(serviceName => {
    //             const service = _proto[serviceName];
    //             this.serveServiceRouter(router, service);
    //         });

    //     rootRouter.use(servePath, router.routes());
    // }

    // private serveServiceRouter (controllerRouter: KoaRouter, service) {
    //     const servePath = Reflect.getMetadata(MetaDataKeys.PATH, service) as string;
    //     const serveMethod = Reflect.getMetadata(MetaDataKeys.METHOD, service) as string;
        
    //     controllerRouter[serveMethod.toLowerCase()](servePath, service);
    // }
}
