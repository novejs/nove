import { Middleware, Context } from 'koa';
import { ReturnDescriptor, ServiceDescriptor } from '../interfaces';

/**
 * handle response and logic return
 */
export class ReturnProxy {

    /**
     * pack service fn
     * @param {Function} fn
     * @param {ReturnDescriptor}  returnDescriptor
     * @param {ServiceDescriptor} serviceDescriptor
     */
    public static serve (
        fn: any,
        returnDescriptor: ReturnDescriptor,
        serviceDescriptor: ServiceDescriptor
    ): Middleware {
        return async (ctx: Context, next: () => Promise<any>) => {
            const requiredParams = serviceDescriptor.params;

            const params = requiredParams.map((param, i) => {
                if (param.parameterIndex !== i) {
                    throw new Error('⨯ method params must decorate with decorator!');
                }

                // TODO: strict type check and conversion
                return this.exposeContext(ctx, param.paramTarget, param.key);
            });

            try {
                const returnValue = await fn.apply(serviceDescriptor.parent.prototype, params);
                ctx.body = returnValue;
            } catch (e) {
                throw e;
            }
        }
    }

    private static exposeContext (ctx: Context, key: string, subKey?: string) {
        switch (key) {
            case 'body':
                return subKey
                    ? ctx.body[subKey]
                    : ctx.body;
            case 'query':
                return subKey
                    ? ctx.query[subKey]
                    : ctx.query;
            case 'param':
                return subKey
                    ? ctx.params[subKey]
                    : ctx.params;
            case 'header':
                return subKey
                    ? ctx.header[subKey]
                    : ctx.header;
            case 'cookie':
                return ctx.cookie.get(subKey);
            case 'state':
                return subKey
                    ? ctx.state[subKey]
                    : ctx.state;
            default:
                return ctx;
        }
    }

}
