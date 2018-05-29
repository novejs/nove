import 'reflect-metadata';
import { exposeControllerMetadata, exposeServiceMetadata } from '../../../src/metadata';
import { ControllerMetadataKeys, ServiceMetadataKeys } from '../../../src/constants';

describe('Metadata expose', () => {
    test('exposeControllerMetadata', () => {
        class Target {}

        const metadata = exposeControllerMetadata(Target);

        const keys = Object.keys(ControllerMetadataKeys);
        expect(Object.keys(metadata)).toEqual(keys);
        keys.forEach(key => {
            expect(metadata).toHaveProperty(key, undefined);
        });
    });

    test('exposeServiceMetadata', () => {
        class Target {
            index () {}
        }

        const metadata = exposeServiceMetadata(Target.prototype.index);

        const keys = Object.keys(ServiceMetadataKeys);
        expect(Object.keys(metadata)).toEqual(keys);
        keys.forEach(key => {
            expect(metadata).toHaveProperty(key, undefined);
        });
    });
});
