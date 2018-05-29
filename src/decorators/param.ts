import { ServiceMetadataKeys } from '../constants';
import { getMetadata, setMetadata } from '../metadata';

/**
 * alias of ctx.request.body
 * `undefined` will return when disable bodyparser
 * @param {string} key? return ctx.request.body[key] or ctx.request.body
 */
export function Body (key?: string) {
    return function (target: any, propertyKey: string , parameterIndex: number) {
        const existingParams = getMetadata(target[propertyKey], ServiceMetadataKeys.params) || [];

        existingParams.unshift({
            paramTarget: 'body',
            key: key,
            target,
            propertyKey,
            parameterIndex
        });

        setMetadata(target[propertyKey], ServiceMetadataKeys.params, existingParams);
    }
}

/**
 * alias of ctx.query
 * @param {string} key? return ctx.query[key] or ctx.query
 */
export function Query (key?: string) {
    return function (target: any, propertyKey: string , parameterIndex: number) {
        const existingParams = getMetadata(target[propertyKey], ServiceMetadataKeys.params) || [];

        existingParams.unshift({
            paramTarget: 'query',
            key: key,
            target,
            propertyKey,
            parameterIndex
        });

        setMetadata(target[propertyKey], ServiceMetadataKeys.params, existingParams);
    }
}

/**
 * alias of ctx.params
 * @param {string} key? return ctx.params[key] or ctx.params
 */
export function Param (key?: string) {
    return function (target: any, propertyKey: string , parameterIndex: number) {
        const existingParams = getMetadata(target[propertyKey], ServiceMetadataKeys.params) || [];

        existingParams.unshift({
            paramTarget: 'param',
            key: key,
            target,
            propertyKey,
            parameterIndex
        });

        setMetadata(target[propertyKey], ServiceMetadataKeys.params, existingParams);
    }
}

/**
 * alias of ctx.header
 * @param {string} key? return ctx.header[key] or ctx.header
 */
export function Header (key?: string) {
    return function (target: any, propertyKey: string , parameterIndex: number) {
        const existingParams = getMetadata(target[propertyKey], ServiceMetadataKeys.params) || [];

        existingParams.unshift({
            paramTarget: 'header',
            key: key,
            target,
            propertyKey,
            parameterIndex
        });

        setMetadata(target[propertyKey], ServiceMetadataKeys.params, existingParams);
    }
}

/**
 * alias of ctx.cookies.get
 * @param {string} key return ctx.cookies.get(key)
 */
export function Cookie (key: string) {
    return function (target: any, propertyKey: string , parameterIndex: number) {
        const existingParams = getMetadata(target[propertyKey], ServiceMetadataKeys.params) || [];

        existingParams.unshift({
            paramTarget: 'cookie',
            key: key,
            target,
            propertyKey,
            parameterIndex
        });

        setMetadata(target[propertyKey], ServiceMetadataKeys.params, existingParams);
    }
}

/**
 * alias of ctx.state
 * @param {string} key? return ctx.state[key] or ctx.state
 */
export function State (key?: string) {
    return function (target: any, propertyKey: string , parameterIndex: number) {
        const existingParams = getMetadata(target[propertyKey], ServiceMetadataKeys.params) || [];

        existingParams.unshift({
            paramTarget: 'state',
            key: key,
            target,
            propertyKey,
            parameterIndex
        });

        setMetadata(target[propertyKey], ServiceMetadataKeys.params, existingParams);
    }
}

/**
 * alias of ctx
 * @param {string} key? return ctx[key] or ctx
 */
export function Ctx (key?: string) {
    return function (target: any, propertyKey: string , parameterIndex: number) {
        const existingParams = getMetadata(target[propertyKey], ServiceMetadataKeys.params) || [];

        existingParams.unshift({
            paramTarget: 'ctx',
            key: key,
            target,
            propertyKey,
            parameterIndex
        });

        setMetadata(target[propertyKey], ServiceMetadataKeys.params, existingParams);
    }
}
