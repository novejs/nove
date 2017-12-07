import 'reflect-metadata';
import { ControllerMetadataKeys, ServiceMetadataKeys } from '../constants';

function exposeMetadata (target, keys) {
    const metadata = {};

    Object.keys(keys).forEach(key => {
        const value = Reflect.getMetadata(keys[key], target);
        metadata[key] = value;
    });

    return metadata;
}

export function exposeControllerMetadata (target) {
    return exposeMetadata(target, ControllerMetadataKeys);
}

export function exposeServiceMetadata (target) {
    return exposeMetadata(target, ServiceMetadataKeys);
}
