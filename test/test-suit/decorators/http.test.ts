import 'reflect-metadata';
import { ALL, HEAD, OPTIONS, GET, PUT, POST, PATCH, DELETE } from '../../../src/decorators';
import { ServiceMetadataKeys, HttpMethods } from '../../../src/constants';

describe('Http Request Method Decorators', () => {
    test('@ALL', () => {
        const _path = '/';

        class MyController {
            @ALL(_path)
            index () {}
        }

        const path = Reflect.getMetadata(ServiceMetadataKeys.path, MyController.prototype.index);
        const method = Reflect.getMetadata(ServiceMetadataKeys.method, MyController.prototype.index);
        
        expect(path).toBe(_path);
        expect(method).toBe(HttpMethods.ALL);
    });

    test('@HEAD', () => {
        const _path = '/';

        class MyController {
            @HEAD(_path)
            index () {}
        }

        const path = Reflect.getMetadata(ServiceMetadataKeys.path, MyController.prototype.index);
        const method = Reflect.getMetadata(ServiceMetadataKeys.method, MyController.prototype.index);
        
        expect(path).toBe(_path);
        expect(method).toBe(HttpMethods.HEAD);
    });

    test('@OPTIONS', () => {
        const _path = '/';

        class MyController {
            @OPTIONS(_path)
            index () {}
        }

        const path = Reflect.getMetadata(ServiceMetadataKeys.path, MyController.prototype.index);
        const method = Reflect.getMetadata(ServiceMetadataKeys.method, MyController.prototype.index);
        
        expect(path).toBe(_path);
        expect(method).toBe(HttpMethods.OPTIONS);
    });

    test('@GET', () => {
        const _path = '/';

        class MyController {
            @GET(_path)
            index () {}
        }

        const path = Reflect.getMetadata(ServiceMetadataKeys.path, MyController.prototype.index);
        const method = Reflect.getMetadata(ServiceMetadataKeys.method, MyController.prototype.index);
        
        expect(path).toBe(_path);
        expect(method).toBe(HttpMethods.GET);
    });

    test('@PUT', () => {
        const _path = '/';

        class MyController {
            @PUT(_path)
            index () {}
        }

        const path = Reflect.getMetadata(ServiceMetadataKeys.path, MyController.prototype.index);
        const method = Reflect.getMetadata(ServiceMetadataKeys.method, MyController.prototype.index);
        
        expect(path).toBe(_path);
        expect(method).toBe(HttpMethods.PUT);
    });

    test('@POST', () => {
        const _path = '/';

        class MyController {
            @POST(_path)
            index () {}
        }

        const path = Reflect.getMetadata(ServiceMetadataKeys.path, MyController.prototype.index);
        const method = Reflect.getMetadata(ServiceMetadataKeys.method, MyController.prototype.index);
        
        expect(path).toBe(_path);
        expect(method).toBe(HttpMethods.POST);
    });

    test('@PATCH', () => {
        const _path = '/';

        class MyController {
            @PATCH(_path)
            index () {}
        }

        const path = Reflect.getMetadata(ServiceMetadataKeys.path, MyController.prototype.index);
        const method = Reflect.getMetadata(ServiceMetadataKeys.method, MyController.prototype.index);
        
        expect(path).toBe(_path);
        expect(method).toBe(HttpMethods.PATCH);
    });

    test('@DELETE', () => {
        const _path = '/';

        class MyController {
            @DELETE(_path)
            index () {}
        }

        const path = Reflect.getMetadata(ServiceMetadataKeys.path, MyController.prototype.index);
        const method = Reflect.getMetadata(ServiceMetadataKeys.method, MyController.prototype.index);
        
        expect(path).toBe(_path);
        expect(method).toBe(HttpMethods.DELETE);
    });
});
