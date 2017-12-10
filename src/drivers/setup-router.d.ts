/// <reference types="koa" />
/// <reference types="koa-bodyparser" />
/// <reference types="koa-router" />
import * as Koa from 'koa';
import { NoveOptions } from '../interfaces';
export declare function setupRouter(app: Koa, options: NoveOptions): void;
