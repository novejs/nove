import 'reflect-metadata';
import { HttpMethods, ServiceMetadataKeys } from '../constants';

/**
 * generate decorator
 * @param {HttpMethods} method http request method
 * @param {string}  path   serve path
 */
function createMethodDecorator (method: HttpMethods, path: string): MethodDecorator {
    return function (target, propertyKey: string, descriptor: PropertyDescriptor) {
        Reflect.defineMetadata(ServiceMetadataKeys.path, path, descriptor.value);
        Reflect.defineMetadata(ServiceMetadataKeys.method, method, descriptor.value);
    }
}

export function ALL (path: string) {
    return createMethodDecorator(HttpMethods.ALL, path);
}

export function HEAD (path: string) {
    return createMethodDecorator(HttpMethods.HEAD, path);
}

export function OPTIONS (path: string) {
    return createMethodDecorator(HttpMethods.OPTIONS, path);
}

export function GET (path: string) {
    return createMethodDecorator(HttpMethods.GET, path);
}

export function PUT (path: string) {
    return createMethodDecorator(HttpMethods.PUT, path);
}

export function POST (path: string) {
    return createMethodDecorator(HttpMethods.POST, path);
}

export function PATCH (path: string) {
    return createMethodDecorator(HttpMethods.PATCH, path);
}

export function DELETE (path: string) {
    return createMethodDecorator(HttpMethods.DELETE, path);
}
