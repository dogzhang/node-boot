import {
    AllMapping, Controller, DeleteMapping, GetMapping, HeadMapping, Mapping, PatchMapping,
    PostMapping, PutMapping
} from '../../../../bin/index';

@Controller('/home')
export class HomeController {
    @GetMapping('/index')
    index() {
        return 'ok'
    }

    @GetMapping()
    index1() {
        return Promise.resolve('ok')
    }

    @GetMapping()
    async index2() {
        let str = await Promise.resolve('ok')
        return str
    }

    @PostMapping()
    index3() {
        return 'ok'
    }

    @PutMapping()
    index4() {
        return 'ok'
    }

    @PatchMapping()
    index5() {
        return 'ok'
    }

    @DeleteMapping()
    index6() {
        return 'ok'
    }

    @HeadMapping()
    index7() {
        return 'ok'
    }

    @AllMapping()
    index8() {
        return 'ok'
    }

    index9() {
        return 'ok'
    }

    @Mapping('get')
    index10() {
        return 'ok'
    }

    @Mapping('get', '/index11')
    index11() {
        return 'ok'
    }

    @Mapping('GET')
    index12() {
        return 'ok'
    }
}