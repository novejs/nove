import { Middleware, Context } from 'koa';
import { ReturnDescriptor } from '../interfaces';

/**
 * TODO: follow returnDescriptor to format response value
 */
export function returnProxy (fn: Middleware, returnDescriptor: ReturnDescriptor): Middleware {
    return (ctx: Context, next: () => Promise<any>) => {
        fn(ctx, next);
    }
}
