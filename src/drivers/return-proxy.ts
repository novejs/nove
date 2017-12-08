import { Middleware, Context } from 'koa';
import { ReturnDescriptor, ServiceDescriptor } from '../interfaces';

/**
 * pack service fn
 * @param {Function} fn
 * @param {ReturnDescriptor}  returnDescriptor
 * @param {any} requiredParams
 * @param {any} parent
 */
export function ReturnProxy (
    fn: any,
    returnDescriptor: ReturnDescriptor,
    requiredParams: any,
    parent: any
): Middleware {
    return async (ctx: Context, next: () => Promise<any>) => {
        const paramCount = requiredParams.length;
        const params = [];
        let idx = 0;

        while (idx < paramCount) {
            const param = requiredParams[idx];
            const { parameterIndex, paramTarget, key } = param;

            if (parameterIndex !== idx) {
                throw new Error('⨯ method params must decorate with decorator!');
            }

            params.push(
                exposeContext(ctx, paramTarget, key)
            );

            idx++;
        };

        try {
            const returnValue = await fn.apply(parent.prototype, params);
            ctx.body = returnValue;
        } catch (e) {
            throw e;
        }
    }
}

function exposeContext (ctx: Context, key: string, subKey?: string) {
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
