/// <reference types="koa" />
/// <reference types="koa-bodyparser" />
/// <reference types="koa-router" />
/// <reference types="node" />
import * as Koa from 'koa';
import { Server } from 'http';
import { NoveOptions } from '../interfaces';
export declare class Nove {
    app: Koa;
    constructor(options: NoveOptions);
    listen(...args: any[]): Server;
}
