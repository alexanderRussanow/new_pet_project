import { StateSchema } from 'app/providers/StoreProvider';
import { getPostData, getPostError, getPostIsLoading } from './postSelectors';

describe(
    'Post Selectors tests',
    () => {
        it(
            'should return the post data',
            () => {
                const post = {
                    id: '1',
                    title: 'Title',
                    subtitle: 'Subtitle',
                    img: 'https://picsum.photos/200/300',
                    date: '2021-01-01',
                    views: 0,
                    likes: 0,
                    author: 'John Doe',
                    tags: [],
                    content: [],
                };
                const state: DeepPartial<StateSchema> = {
                    post: {
                        postData: post,
                    },
                };
                expect( getPostData( state as StateSchema ) ).toEqual( post );
            } 
        );
        it(
            'should return undefined if no post data',
            () => {
                const state: DeepPartial<StateSchema> = {
                    post: {
                        postData: undefined,
                    },
                };
                expect( getPostData( state as StateSchema ) ).toBeUndefined();
            } 
        );
        it(
            'should be isLoading true',
            () => {
                const state: DeepPartial<StateSchema> = {
                    post: {
                        isLoading: true,
                    },
                };
                expect( getPostIsLoading( state as StateSchema ) ).toBeTruthy();
            } 
        );
        it(
            'should return error',
            () => {
                const state: DeepPartial<StateSchema> = {
                    post: {
                        error: 'Error',
                    },
                };
                expect( getPostError( state as StateSchema ) ).toBe( 'Error' );
            } 
        );
    } 
);
