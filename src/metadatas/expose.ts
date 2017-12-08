import 'reflect-metadata';
import { ControllerMetadataKeys, ServiceMetadataKeys } from '../constants';

/**
 * expose metadata from target
 * @param {any}  target operate target
 * @param {enum} keys metadata key map
 */
function exposeMetadata (target, keys) {
    const metadata = {};

    Object.keys(keys).forEach(key => {
        const value = Reflect.getMetadata(keys[key], target);
        metadata[key] = value;
    });

    return metadata;
}

/**
 * expose controller metadata
 * @param {new () => {}} target 
 */
export function exposeControllerMetadata (target) {
    return exposeMetadata(target, ControllerMetadataKeys);
}

/**
 * expose service method metadata
 * @param {Function} target 
 */
export function exposeServiceMetadata (target) {
    return exposeMetadata(target, ServiceMetadataKeys);
}
