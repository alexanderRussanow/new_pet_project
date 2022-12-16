import { addQueryParams } from './addQueryParams';

describe(
    'addQueryParams',
    () => {
        test(
            'should not add query params with empty value',
            () => {
                const params2 = {
                    search: 'bar',
                    sort: '',
                };
                addQueryParams( params2 );
                expect( window.location.search ).toBe( '?search=bar' );
            } 
        );
    // test(
    //     'should add query params',
    //     () => {
    //         const params = {
    //             foo: 'bar',
    //             baz: 'qux',
    //         };
    //         addQueryParams( params );
    //         expect( window.location.search ).toBe( '?foo=bar&baz=qux' );
    //     }
    // );
    } 
);
