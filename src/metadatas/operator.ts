import 'reflect-metadata';

/**
 * get metadata from target
 * @param {any}    target 
 * @param {string} key 
 */
export function getMetadata (target: any, key: string) {
    return Reflect.getMetadata(key, target);
}

/**
 * set metadata to target
 * @param {any}    target 
 * @param {string} key 
 * @param {any}    value 
 */
export function setMetadata (target: any, key: string, value: any) {
    return Reflect.defineMetadata(key, value, target);
}
