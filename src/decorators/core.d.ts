/// <reference types="koa" />
import { Middleware } from 'koa';
export declare function Controller(path: string): ClassDecorator;
export declare function UseBefore(...middlewares: Middleware[]): Function;
export declare function UseAfter(...middlewares: Middleware[]): Function;
