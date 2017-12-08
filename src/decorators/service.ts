import { ServiceMetadataKeys } from '../constants';
import { getMetadata, setMetadata } from '../metadatas';

/**
 * define return type descriptor
 * this will be used in fast json stringify
 * descriptor should be a class
 * @example
 *   class MyDTO {
 *     readonly name: string;
 *   }
 *   class MyController {
 *     @GET('/')
 *     @Return(MyDTO)
 *     index () {
 *       return { name: 'Jason' };
 *     }
 *   }
 * 
 * @param {Class} typeDescriptor
 */
export function Return (typeDescriptor: new () => {}) {
    return function (target, propertyKey?: string, descriptor?: PropertyDescriptor) {
        const returnType = getMetadata(descriptor.value, ServiceMetadataKeys.returnDescriptor) || {};
        returnType['type'] = typeDescriptor;
        setMetadata(descriptor.value, ServiceMetadataKeys.returnDescriptor, returnType);
    }
}

/**
 * set header(s) to response
 * @example
 *   class MyController {
 *     @GET('/')
 *     @Headers('Content-Type', 'application/json')
 *     index () {
 *       return { name: 'Jason' };
 *     }
 *   }
 * 
 * @param {string|object} key header's key or headers map
 * @param {string} value header's value
 */
export function Headers (key: string | object, value: string) {
    let headers = key;
    if (typeof key === 'string') {
        headers = { [key]: value };
    }

    return function (target, propertyKey?: string, descriptor?: PropertyDescriptor) {
        const oldHeaders = getMetadata(descriptor.value, ServiceMetadataKeys.headers) || {};
        setMetadata(descriptor.value, ServiceMetadataKeys.returnDescriptor, Object.assign({}, oldHeaders, headers));
    }
}
