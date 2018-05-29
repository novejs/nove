import 'reflect-metadata';

/**
 * get metadata from target
 * @param {any}    target 
 * @param {string} key 
 */
export function getMetadata (target: any, key: string, pkey?: string) {
    return pkey
        ? Reflect.getMetadata(key, target, pkey)
        : Reflect.getMetadata(key, target);
}

/**
 * set metadata to target
 * @param {any}    target 
 * @param {string} key 
 * @param {any}    value 
 */
export function setMetadata (target: any, key: string, value: any, pkey?: string) {
    return pkey
        ? Reflect.defineMetadata(key, value, target, pkey)
        : Reflect.defineMetadata(key, value, target);
}
