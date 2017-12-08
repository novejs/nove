import * as Koa from 'koa';
import { NoveRouter } from '../core/nove-router';
import { NoveOptions, ControllerDescriptor, ServiceDescriptor } from '../interfaces';
import { exposeControllerMetadata, exposeServiceMetadata } from '../metadatas';

export function setupRouter (app: Koa, options: NoveOptions) {
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

        const self = initSubRouter(services);

        return Object.assign({}, metadata, { services, self });
    }) as ControllerDescriptor[];

    initRootRouter(app, options, controllers);
}

function initRootRouter (app: Koa, options: NoveOptions, controllers: ControllerDescriptor[]) {
    const rootRouter = new NoveRouter(options);

    rootRouter
        .setupMiddlewares(options.beforeMiddlewares)
        .setupControllers(controllers)
        .setupMiddlewares(options.afterMiddlewares)

    app.use(rootRouter.routes());
}

function initSubRouter (services: ServiceDescriptor[]) {
    const subRouter = new NoveRouter({});
    subRouter.setupService(services)
    return subRouter;
}
