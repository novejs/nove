/// <reference types="koa" />
import { Middleware } from 'koa';
import { ReturnDescriptor } from './return-descriptor';
import { HttpMethods } from '../constants';
export interface ServiceDescriptor {
    path: string;
    beforeMiddlewares: Middleware[];
    afterMiddlewares: Middleware[];
    returnDescriptor: ReturnDescriptor;
    headers: any;
    params: any;
    method: HttpMethods;
    fn: Middleware;
    parent: Function;
}
