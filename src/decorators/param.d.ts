export declare function Body(key?: string): (target: any, propertyKey: string, parameterIndex: number) => void;
export declare function Query(key?: string): (target: any, propertyKey: string, parameterIndex: number) => void;
export declare function Param(key?: string): (target: any, propertyKey: string, parameterIndex: number) => void;
export declare function Header(key?: string): (target: any, propertyKey: string, parameterIndex: number) => void;
export declare function Cookie(key: string): (target: any, propertyKey: string, parameterIndex: number) => void;
export declare function State(key?: string): (target: any, propertyKey: string, parameterIndex: number) => void;
export declare function Ctx(key?: string): (target: any, propertyKey: string, parameterIndex: number) => void;
