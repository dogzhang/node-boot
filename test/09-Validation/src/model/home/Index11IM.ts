import { MinDecimal, Typed } from '../../../../../bin/index';

export class Index11IM {
    @MinDecimal(2)
    @Typed()
    a: number
}