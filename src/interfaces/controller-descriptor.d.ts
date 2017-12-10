/// <reference types="koa" />
import { Middleware } from 'koa';
import { ServiceDescriptor } from './service-descriptor';
import { NoveRouter } from '../core/nove-router';
export interface ControllerDescriptor {
    path: string;
    services: ServiceDescriptor[];
    beforeMiddlewares: Middleware[];
    afterMiddlewares: Middleware[];
    self: NoveRouter;
}
