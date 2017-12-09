import 'reflect-metadata';
import { Controller, UseBefore, UseAfter } from '../../../src/decorators';
import { ControllerMetadataKeys, ServiceMetadataKeys } from '../../../src/constants';

describe('Core Decorators', () => {
    test('@Controller', () => {
        const _path = '/';

        @Controller(_path)
        class MyController {}
        
        expect(Reflect.getMetadata(ControllerMetadataKeys.path, MyController))
            .toBe(_path);
    });

    test('@UseBefore at class', () => {
        const middleware = (ctx, next) => {};

        @UseBefore(middleware)
        class MyController {}

        const beforeMiddlewares = Reflect.getMetadata(ControllerMetadataKeys.beforeMiddlewares, MyController);
        
        expect(beforeMiddlewares).toHaveLength(1);
        expect(beforeMiddlewares[0]).toBe(middleware);
    });

    test('@UseAfter at class', () => {
        const middleware = (ctx, next) => {};

        @UseAfter(middleware)
        class MyController {}

        const afterMiddlewares = Reflect.getMetadata(ControllerMetadataKeys.afterMiddlewares, MyController);
        
        expect(afterMiddlewares).toHaveLength(1);
        expect(afterMiddlewares[0]).toBe(middleware);
    });

    test('@UseBefore at method', () => {
        const middleware = (ctx, next) => {};

        class MyController {
            @UseBefore(middleware)
            index () {}
        }

        const beforeMiddlewares = Reflect.getMetadata(
            ServiceMetadataKeys.beforeMiddlewares,
            MyController.prototype.index
        );
        
        expect(beforeMiddlewares).toHaveLength(1);
        expect(beforeMiddlewares[0]).toBe(middleware);
    });

    test('@UseAfter at method', () => {
        const middleware = (ctx, next) => {};

        class MyController {
            @UseAfter(middleware)
            index () {}
        }

        const afterMiddlewares = Reflect.getMetadata(
            ServiceMetadataKeys.afterMiddlewares,
            MyController.prototype.index
        );
        
        expect(afterMiddlewares).toHaveLength(1);
        expect(afterMiddlewares[0]).toBe(middleware);
    });
});
