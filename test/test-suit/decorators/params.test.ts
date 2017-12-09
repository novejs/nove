import 'reflect-metadata';
import { Body, Query, Param, Header, Cookie, State, Ctx } from '../../../src/decorators';
import { ServiceMetadataKeys } from '../../../src/constants';

describe('Params Decorators', () => {
    test('Multiple params', () => {
        class MyController {
            index (@Body() arg1, @Query() arg2) {}
        }

        const params = Reflect.getMetadata(ServiceMetadataKeys.params, MyController.prototype.index);
        
        expect(params).toHaveLength(2);
    });

    test(`@Body()`, () => {
        class MyController {
            index (@Body() arg1) {}
        }

        const params = Reflect.getMetadata(ServiceMetadataKeys.params, MyController.prototype.index);
        
        expect(params).toHaveLength(1);
        expect(params[0]).toHaveProperty('paramTarget', 'body')
        expect(params[0]).toHaveProperty('key', undefined)
        expect(params[0]).toHaveProperty('target') // to be equel MyController {}
        expect(params[0]).toHaveProperty('propertyKey', 'index')
        expect(params[0]).toHaveProperty('parameterIndex', 0)
    });

    test(`@Body('a')`, () => {
        class MyController {
            index (@Body('a') arg1) {}
        }

        const params = Reflect.getMetadata(ServiceMetadataKeys.params, MyController.prototype.index);
        
        expect(params).toHaveLength(1);
        expect(params[0]).toHaveProperty('paramTarget', 'body')
        expect(params[0]).toHaveProperty('key', 'a')
        expect(params[0]).toHaveProperty('target') // to be equel MyController {}
        expect(params[0]).toHaveProperty('propertyKey', 'index')
        expect(params[0]).toHaveProperty('parameterIndex', 0)
    });

    test(`@Query()`, () => {
        class MyController {
            index (@Query() arg1) {}
        }

        const params = Reflect.getMetadata(ServiceMetadataKeys.params, MyController.prototype.index);
        
        expect(params).toHaveLength(1);
        expect(params[0]).toHaveProperty('paramTarget', 'query')
        expect(params[0]).toHaveProperty('key', undefined)
        expect(params[0]).toHaveProperty('target') // to be equel MyController {}
        expect(params[0]).toHaveProperty('propertyKey', 'index')
        expect(params[0]).toHaveProperty('parameterIndex', 0)
    });

    test(`@Query('a')`, () => {
        class MyController {
            index (@Query('a') arg1) {}
        }

        const params = Reflect.getMetadata(ServiceMetadataKeys.params, MyController.prototype.index);
        
        expect(params).toHaveLength(1);
        expect(params[0]).toHaveProperty('paramTarget', 'query')
        expect(params[0]).toHaveProperty('key', 'a')
        expect(params[0]).toHaveProperty('target') // to be equel MyController {}
        expect(params[0]).toHaveProperty('propertyKey', 'index')
        expect(params[0]).toHaveProperty('parameterIndex', 0)
    });

    test(`@Param()`, () => {
        class MyController {
            index (@Param() arg1) {}
        }

        const params = Reflect.getMetadata(ServiceMetadataKeys.params, MyController.prototype.index);
        
        expect(params).toHaveLength(1);
        expect(params[0]).toHaveProperty('paramTarget', 'param')
        expect(params[0]).toHaveProperty('key', undefined)
        expect(params[0]).toHaveProperty('target') // to be equel MyController {}
        expect(params[0]).toHaveProperty('propertyKey', 'index')
        expect(params[0]).toHaveProperty('parameterIndex', 0)
    });

    test(`@Param('a')`, () => {
        class MyController {
            index (@Param('a') arg1) {}
        }

        const params = Reflect.getMetadata(ServiceMetadataKeys.params, MyController.prototype.index);
        
        expect(params).toHaveLength(1);
        expect(params[0]).toHaveProperty('paramTarget', 'param')
        expect(params[0]).toHaveProperty('key', 'a')
        expect(params[0]).toHaveProperty('target') // to be equel MyController {}
        expect(params[0]).toHaveProperty('propertyKey', 'index')
        expect(params[0]).toHaveProperty('parameterIndex', 0)
    });

    test(`@Header()`, () => {
        class MyController {
            index (@Header() arg1) {}
        }

        const params = Reflect.getMetadata(ServiceMetadataKeys.params, MyController.prototype.index);
        
        expect(params).toHaveLength(1);
        expect(params[0]).toHaveProperty('paramTarget', 'header')
        expect(params[0]).toHaveProperty('key', undefined)
        expect(params[0]).toHaveProperty('target') // to be equel MyController {}
        expect(params[0]).toHaveProperty('propertyKey', 'index')
        expect(params[0]).toHaveProperty('parameterIndex', 0)
    });

    test(`@Header('a')`, () => {
        class MyController {
            index (@Header('a') arg1) {}
        }

        const params = Reflect.getMetadata(ServiceMetadataKeys.params, MyController.prototype.index);
        
        expect(params).toHaveLength(1);
        expect(params[0]).toHaveProperty('paramTarget', 'header')
        expect(params[0]).toHaveProperty('key', 'a')
        expect(params[0]).toHaveProperty('target') // to be equel MyController {}
        expect(params[0]).toHaveProperty('propertyKey', 'index')
        expect(params[0]).toHaveProperty('parameterIndex', 0)
    });

    test(`@Cookie('a')`, () => {
        class MyController {
            index (@Cookie('a') arg1) {}
        }

        const params = Reflect.getMetadata(ServiceMetadataKeys.params, MyController.prototype.index);
        
        expect(params).toHaveLength(1);
        expect(params[0]).toHaveProperty('paramTarget', 'cookie')
        expect(params[0]).toHaveProperty('key', 'a')
        expect(params[0]).toHaveProperty('target') // to be equel MyController {}
        expect(params[0]).toHaveProperty('propertyKey', 'index')
        expect(params[0]).toHaveProperty('parameterIndex', 0)
    });

    test(`@State()`, () => {
        class MyController {
            index (@State() arg1) {}
        }

        const params = Reflect.getMetadata(ServiceMetadataKeys.params, MyController.prototype.index);
        
        expect(params).toHaveLength(1);
        expect(params[0]).toHaveProperty('paramTarget', 'state')
        expect(params[0]).toHaveProperty('key', undefined)
        expect(params[0]).toHaveProperty('target') // to be equel MyController {}
        expect(params[0]).toHaveProperty('propertyKey', 'index')
        expect(params[0]).toHaveProperty('parameterIndex', 0)
    });

    test(`@State('a')`, () => {
        class MyController {
            index (@State('a') arg1) {}
        }

        const params = Reflect.getMetadata(ServiceMetadataKeys.params, MyController.prototype.index);
        
        expect(params).toHaveLength(1);
        expect(params[0]).toHaveProperty('paramTarget', 'state')
        expect(params[0]).toHaveProperty('key', 'a')
        expect(params[0]).toHaveProperty('target') // to be equel MyController {}
        expect(params[0]).toHaveProperty('propertyKey', 'index')
        expect(params[0]).toHaveProperty('parameterIndex', 0)
    });

    test(`@Ctx()`, () => {
        class MyController {
            index (@Ctx() arg1) {}
        }

        const params = Reflect.getMetadata(ServiceMetadataKeys.params, MyController.prototype.index);
        
        expect(params).toHaveLength(1);
        expect(params[0]).toHaveProperty('paramTarget', 'ctx')
        expect(params[0]).toHaveProperty('key', undefined)
        expect(params[0]).toHaveProperty('target') // to be equel MyController {}
        expect(params[0]).toHaveProperty('propertyKey', 'index')
        expect(params[0]).toHaveProperty('parameterIndex', 0)
    });

    test(`@Ctx('a')`, () => {
        class MyController {
            index (@Ctx('a') arg1) {}
        }

        const params = Reflect.getMetadata(ServiceMetadataKeys.params, MyController.prototype.index);
        
        expect(params).toHaveLength(1);
        expect(params[0]).toHaveProperty('paramTarget', 'ctx')
        expect(params[0]).toHaveProperty('key', 'a')
        expect(params[0]).toHaveProperty('target') // to be equel MyController {}
        expect(params[0]).toHaveProperty('propertyKey', 'index')
        expect(params[0]).toHaveProperty('parameterIndex', 0)
    });
    
});
