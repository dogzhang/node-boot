import { ExceptionFilter, ExceptionHandler } from '../../../../bin/index';
import { UnAuthorizedException } from './MyActionFilter';

@ExceptionFilter
export class MyExceptionFilter {
    @ExceptionHandler(UnAuthorizedException)
    async handleUnAuthorizedException(ctx: any) {
        ctx.throw(401)
    }

    @ExceptionHandler(Error)
    async handleError(ctx: any, error: Error) {
        ctx.body = 'ExceptionFilter-' + error.message
    }
}