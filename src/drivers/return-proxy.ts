import { Middleware, Context } from 'koa';
import { ReturnDescriptor, ServiceDescriptor } from '../interfaces';
import { HttpError, payloadKey } from '../errors/http-error';

/**
 * pack service fn
 * @param {Function} fn
 * @param {ReturnDescriptor}  returnDescriptor
 * @param {any} requiredParams
 * @param {any} parent
 */
/* istanbul ignore next */
export function ReturnProxy (
    fn: any,
    returnDescriptor: ReturnDescriptor,
    requiredParams: any,
    parent: any,
    headers: any
): Middleware {
    return async (ctx: Context, next: () => Promise<any>) => {
        const params = [];
        const paramCount = requiredParams ? requiredParams.length : 0;
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
            ctx.set(headers);
            ctx.body = returnValue;
        } catch (e) {
            if (e instanceof HttpError) {
                ctx.status = e.httpCode;
                ctx.body = e[payloadKey] || e.message;
            } else {
                throw e;
            }
        }
    }
}

/* istanbul ignore next */
function exposeContext (ctx: Context, key: string, subKey?: string) {
    switch (key) {
        case 'body':
            return subKey
                ? (ctx.request as any).body[subKey]
                : (ctx.request as any).body;
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
            return subKey ? ctx[subKey] : ctx;
    }
}
