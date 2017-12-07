import 'reflect-metadata';
import { MetaDataKeys } from '../constants';

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
        Reflect.defineMetadata(MetaDataKeys.PATH, path, target);
    }
}

