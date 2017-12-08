import { Middleware } from 'koa';
import { ReturnDescriptor } from './return-descriptor';
import { HttpMethods } from '../constants';

/**
 * describe the configuration of service
 */
export interface ServiceDescriptor {

    /**
     * path that service serve
     */
    path: string;

    /**
     * middlewares that serve before service
     */
    beforeMiddlewares: Middleware[];

    /**
     * middlewares that serve after service
     */
    afterMiddlewares: Middleware[];

    /**
     * return value descriptor of service
     */
    returnDescriptor: ReturnDescriptor;

    /**
     * response headers
     */
    headers: any;

    /**
     * fn params
     */
    params: any;

    /**
     * method of http request that controller served
     */
    method: HttpMethods;

    /**
     * service itself
     */
    fn: Middleware;
}
