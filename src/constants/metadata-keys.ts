/**
 * controllers' metadata keys map
 */
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

/**
 * services' metadata keys map
 */
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
