/// <reference types="koa" />
import { Middleware } from 'koa';
import { ReturnDescriptor } from '../interfaces';
export declare function ReturnProxy(fn: any, returnDescriptor: ReturnDescriptor, requiredParams: any, parent: any): Middleware;
