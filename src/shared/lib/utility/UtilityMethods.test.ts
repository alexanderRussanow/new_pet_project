import { classNames } from './UtilityMethods';

describe(
    'classNames',
    () => {
        test(
            'should return a string',
            () => {
                expect( classNames( 'test' ) ).toBe( 'test' );
            } 
        );
        test(
            'should return a string with a modifier',
            () => {
                expect( classNames(
                    'test',
                    { 'test--modifier': true } 
                ) ).toBe( 'test test--modifier' );
            } 
        );
        test(
            'should return a string with a modifier and additional classes',
            () => {
                expect( classNames(
                    'test',
                    { 'test--modifier': true },
                    [
                        'test--additional'
                    ] 
                ) ).toBe( 'test test--modifier test--additional' );
            } 
        );
        test(
            'should return a string with a modifier and additional classes',
            () => {
                expect( classNames(
                    'test',
                    { 'test--modifier': false },
                    [
                        'test--additional',
                        'test--additional2'
                    ] 
                ) ).toBe( 'test test--additional test--additional2' );
            } 
        );
    } 
);
