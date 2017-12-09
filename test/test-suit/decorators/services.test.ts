import 'reflect-metadata';
import { Headers } from '../../../src/decorators';
import { ServiceMetadataKeys } from '../../../src/constants';

describe('Service Decorators', () => {
    test(`@Headers('Content-Type', 'application/json')`, () => {
        const _headerKey = 'Content-Type';
        const _headerValue = 'application/json';

        class MyController {
            @Headers(_headerKey, _headerValue)
            index () {}
        }

        const headers = Reflect.getMetadata(ServiceMetadataKeys.headers, MyController.prototype.index);
        
        expect(headers).toHaveProperty(_headerKey);
        expect(headers[_headerKey]).toBe(_headerValue);
    });

    test(`@Headers({'Content-Type': 'application/json'})`, () => {
        const _headerKey = 'Content-Type';
        const _headerValue = 'application/json';

        class MyController {
            @Headers({ [_headerKey]: _headerValue })
            index () {}
        }

        const headers = Reflect.getMetadata(ServiceMetadataKeys.headers, MyController.prototype.index);
        
        expect(headers).toHaveProperty(_headerKey);
        expect(headers[_headerKey]).toBe(_headerValue);
    });
});
