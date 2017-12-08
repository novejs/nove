import { Middleware } from 'koa';
import { ControllerMetadataKeys, ServiceMetadataKeys } from '../constants';
import { getMetadata, setMetadata } from '../metadatas';

/**
 * controller decorator
 * @example
 *   @Controller('/')
 *   class MyController {}
 * 
 * @param {string} path router path
 */
export function Controller (path: string): ClassDecorator {
    return function (target) {
        setMetadata(target, ControllerMetadataKeys.path, path);
    }
}

/**
 * setup middleware before controller or services
 * @example
 *   @UseBefore(middleware1)
 *   class MyController {
 *     @GET('/')
 *     @UseBefore(middleware2)
 *     index () {}
 *   }
 * 
 * @param {Middleware[]} middlewares koa middlewares
 */
export function UseBefore (...middlewares: Middleware[]): ClassDecorator | MethodDecorator {
    return function (target, propertyKey?: string, descriptor?: PropertyDescriptor) {
        let trg = target;
        if (descriptor) {
            // only service has descriptor
            trg = descriptor.value;
        }

        const mids = getMetadata(trg, ServiceMetadataKeys.beforeMiddlewares) || [];
        mids.push(...middlewares);
        setMetadata(trg, ServiceMetadataKeys.beforeMiddlewares, mids);
    }
}

/**
 * setup middleware after controller or services
 * @example
 *   @UseAfter(middleware1)
 *   class MyController {
 *     @GET('/')
 *     @UseAfter(middleware2)
 *     index () {}
 *   }
 * 
 * @param {Middleware[]} middlewares koa middlewares
 */
export function UseAfter (...middlewares: Middleware[]): ClassDecorator | MethodDecorator {
    return function (target, propertyKey?: string, descriptor?: PropertyDescriptor) {
        let trg = target;
        if (descriptor) {
            // only service has descriptor
            trg = descriptor.value;
        }

        const mids = getMetadata(trg, ServiceMetadataKeys.afterMiddlewares) || [];
        mids.push(...middlewares);
        setMetadata(trg, ServiceMetadataKeys.afterMiddlewares, mids);
    }
}
