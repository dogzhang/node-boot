import { Autowired, Component } from '../../../../bin/index';
import { MyService5 } from './MyService5';

@Component
export class MyService4 {
    @Autowired(() => MyService5)
    myService5: MyService5

    index() {
        return this.myService5.index()
    }

    index1() {
        return 'index1'
    }
}