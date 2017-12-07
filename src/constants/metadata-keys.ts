/**
 * Metadata keys
 */
export enum MetaDataKeys {
    /**
     * serve path
     * valid for: controller, service
     */
    PATH = '__PATH__',

    /**
     * serve method
     * valid for: service
     */
    METHOD = '__METHOD__',
}

export enum ControllerMetadataKeys {
    /**
     * serve path
     */
    path = '__PATH__',

    /**
     * before middlewares
     */
    beforeMiddlewares = '__BEFORE_MIDDLEWARES__',

    /**
     * after middlewares
     */
    afterMiddlewares = '__AFTER_MIDDLEWARES__'
}

export enum ServiceMetadataKeys {
    /**
     * serve path
     */
    path = '__PATH__',

    /**
     * before middlewares
     */
    beforeMiddlewares = '__BEFORE_MIDDLEWARES__',

    /**
     * after middlewares
     */
    afterMiddlewares = '__AFTER_MIDDLEWARES__',

    /**
     * return types
     */
    returnType = '__RETURN_TYPE__',

    /**
     * headers
     */
    headers = '__RESPONSE_HEADERS___',

    /**
     * params
     */
    params = '__FN_PARAMS__',

    /**
     * serve method
     */
    method = '__METHOD__'
}
