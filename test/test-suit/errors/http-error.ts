import {
    HttpError,
    NoContentError,
    BadRequestError,
    UnauthorizedError,
    ForbiddenError,
    NotFoundError,
    RequestEntityTooLargeError,
    InternalServerError,
    NotImplemented,
    ServiceUnavailableError,
    GatewayTimeoutError
} from '../../../src/errors/http-error';

describe('Http errors', () => {
    test('HttpError', () => {
        const errCode = 500
        const errMsg = 'anything wrong'
        const e = new HttpError(errCode, errMsg)

        expect(e.httpCode).toBe(errCode)
        expect(e.message).toBe(errMsg)
    });

    test('NoContentError', () => {
        const errMsg = 'anything wrong'
        const e = new NoContentError(errMsg)

        expect(e.httpCode).toBe(204)
        expect(e.message).toBe(errMsg)
    });

    test('BadRequestError', () => {
        const errMsg = 'anything wrong'
        const e = new BadRequestError(errMsg)

        expect(e.httpCode).toBe(400)
        expect(e.message).toBe(errMsg)
    });

    test('UnauthorizedError', () => {
        const errMsg = 'anything wrong'
        const e = new UnauthorizedError(errMsg)

        expect(e.httpCode).toBe(401)
        expect(e.message).toBe(errMsg)
    });

    test('ForbiddenError', () => {
        const errMsg = 'anything wrong'
        const e = new ForbiddenError(errMsg)

        expect(e.httpCode).toBe(403)
        expect(e.message).toBe(errMsg)
    });

    test('NotFoundError', () => {
        const errMsg = 'anything wrong'
        const e = new NotFoundError(errMsg)

        expect(e.httpCode).toBe(404)
        expect(e.message).toBe(errMsg)
    });

    test('RequestEntityTooLargeError', () => {
        const errMsg = 'anything wrong'
        const e = new RequestEntityTooLargeError(errMsg)

        expect(e.httpCode).toBe(413)
        expect(e.message).toBe(errMsg)
    });

    test('InternalServerError', () => {
        const errMsg = 'anything wrong'
        const e = new InternalServerError(errMsg)

        expect(e.httpCode).toBe(500)
        expect(e.message).toBe(errMsg)
    });

    test('NotImplemented', () => {
        const errMsg = 'anything wrong'
        const e = new NotImplemented(errMsg)

        expect(e.httpCode).toBe(501)
        expect(e.message).toBe(errMsg)
    });

    test('ServiceUnavailableError', () => {
        const errMsg = 'anything wrong'
        const e = new ServiceUnavailableError(errMsg)

        expect(e.httpCode).toBe(503)
        expect(e.message).toBe(errMsg)
    });

    test('GatewayTimeoutError', () => {
        const errMsg = 'anything wrong'
        const e = new GatewayTimeoutError(errMsg)

        expect(e.httpCode).toBe(504)
        expect(e.message).toBe(errMsg)
    });
});
