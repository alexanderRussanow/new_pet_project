import { StateSchema } from "app/providers/StoreProvider";

export const getPostData = ( state: StateSchema ) => state.post?.postData;
export const getPostError = ( state: StateSchema ) => state.post?.error;
export const getPostIsLoading = ( state: StateSchema ) => state.post?.isLoading;
