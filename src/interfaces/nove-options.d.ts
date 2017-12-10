/// <reference types="koa-router" />
/// <reference types="koa" />
/// <reference types="koa__cors" />
import { Middleware, Context } from 'koa';
import { IRouterOptions } from 'koa-router';
import { Options as CorsOptions } from '@koa/cors';
export interface NoveOptions extends IRouterOptions {
    controllers: Function[];
    beforeMiddlewares?: Middleware[];
    afterMiddlewares?: Middleware[];
    use?: Middleware[];
    cors?: boolean;
    corsConfig?: CorsOptions;
    parseBody?: boolean;
    parseBodyConfig?: {
        enableTypes?: string[];
        encode?: string;
        formLimit?: string;
        jsonLimit?: string;
        strict?: boolean;
        detectJSON?: (ctx: Context) => boolean;
        extendTypes?: {
            json?: string[];
            form?: string[];
            text?: string[];
        };
        onerror?: (err: Error, ctx: Context) => void;
    };
}
