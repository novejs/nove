import 'reflect-metadata';
import { setMetadata, getMetadata } from '../../../src/metadata';
import { ControllerMetadataKeys, ServiceMetadataKeys } from '../../../src/constants';

describe('Metadata operators', () => {
    test('getMetadata', () => {
        const key = '__KEY__';
        const value = 'value';

        class Target {}

        Reflect.defineMetadata(key, value, Target);

        expect(getMetadata(Target, key)).toBe(value);
    });

    test('getMetadata with propertyKey', () => {
        const key = '__KEY__';
        const value = 'value';
        const propertyKey = '__PKEY__';

        class Target {}

        Reflect.defineMetadata(key, value, Target, propertyKey);

        expect(getMetadata(Target, key, propertyKey)).toBe(value);
    });

    test('setMetadata', () => {
        const key = '__KEY__';
        const value = 'value';

        class Target {}

        setMetadata(Target, key, value)
        const _value = Reflect.getMetadata(key, Target);

        expect(_value).toBe(value);
    });

    test('setMetadata with propertyKey', () => {
        const key = '__KEY__';
        const value = 'value';
        const propertyKey = '__PKEY__';

        class Target {}

        setMetadata(Target, key, value, propertyKey)
        const _value = Reflect.getMetadata(key, Target, propertyKey);

        expect(_value).toBe(value);
    });
});
