/**
 * options interface of Nove constructor
 */
import { Middleware, Context } from 'koa';
import { IRouterOptions } from 'koa-router';
import { Options as CorsOptions } from '@koa/cors';

export interface NoveOptions extends IRouterOptions {
    /**
     * controllers
     * there must be at least one controller
     */
    controllers: Function[];

    /**
     * middlewares use before controllers and routers
     */
    beforeMiddlewares?: Middleware[];

    /**
     * middlewares use after controllers and routers
     */
    afterMiddlewares?: Middleware[];

    /**
     * alias of `useAfter`
     */
    use?: Middleware[];

    /**
     * enable cors setting
     */
    cors?: boolean;

    /**
     * cors setting
     */
    corsConfig?: CorsOptions;

    /**
     * enable bodyParser
     */
    parseBody?: boolean;

    /**
     * bodyparser config
     */
    parseBodyConfig?: {
        /**
         *  parser will only parse when request type hits enableTypes, default is ['json', 'form'].
         */
        enableTypes?: string[];
        /**
         * requested encoding. Default is utf-8 by co-body
         */
        encode?: string;
    
        /**
         * limit of the urlencoded body. If the body ends up being larger than this limit
         * a 413 error code is returned. Default is 56kb
         */
        formLimit?: string;
    
        /**
         * limit of the json body. Default is 1mb
         */
        jsonLimit?: string;
    
        /**
         * when set to true, JSON parser will only accept arrays and objects. Default is true
         */
        strict?: boolean;
    
        /**
         * custom json request detect function. Default is null
         */
        detectJSON?: (ctx: Context) => boolean;
    
        /**
         * support extend types
         */
        extendTypes?: {
            json?: string[];
            form?: string[];
            text?: string[];
        }
    
        /**
         * support custom error handle
         */
        onerror?: (err: Error, ctx: Context) => void;
    }
}
