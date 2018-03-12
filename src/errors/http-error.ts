// error payload key
export const payloadKey = Symbol('payload')

/**
 * custom http error
 * @example
 * throw new HttpError(404, 'Page not found')
 */
export class HttpError extends Error {
    /**
     * http code will set to header
     */
    httpCode: number = 500;

    [payloadKey]: any = undefined;

    constructor (httpCode: number, payload?: any) {
        super();

        Object.setPrototypeOf(this, HttpError.prototype);
        
        this.httpCode = httpCode;

        if (payload) {
            this.message = payload.toString();
            this[payloadKey] = payload
        }

        this.stack = new Error().stack;
    }
}

/**
 * packaging common http errors
 * @param {number} code http code
 */
/* istanbul ignore next */
function createHttpError (code: number) {
    return class CustomHttpError extends HttpError {
        constructor (payload?: any) {
            super(code);

            if (payload) {
                this.message = payload.toString();
                this[payloadKey] = payload
            }
        }
    }
}

/**
 * 204 No Content
 */
export const NoContentError = createHttpError(204);

/**
 * 400 Bad Request
 */
export const BadRequestError = createHttpError(400);

/**
 * 401 Unauthorized
 */
export const UnauthorizedError = createHttpError(401);

/**
 * 403 Forbidden
 */
export const ForbiddenError = createHttpError(403);

/**
 * 404 Not Found
 */
export const NotFoundError = createHttpError(404);

/**
 * 413 Request Entity Too Large
 */
export const RequestEntityTooLargeError = createHttpError(413);

/**
 * 500 Internal Server Error
 */
export const InternalServerError = createHttpError(500);

/**
 * 501 Not Implemented
 */
export const NotImplemented = createHttpError(501);

/**
 * 503 Service Unavailable
 */
export const ServiceUnavailableError = createHttpError(503);

/**
 * 504 Gateway Timeout
 */
export const GatewayTimeoutError = createHttpError(504);
