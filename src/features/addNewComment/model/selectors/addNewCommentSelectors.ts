import { StateSchema } from 'app/providers/StoreProvider';

export const getCommentTextSelector = ( state: StateSchema ) => state.addNewComment?.text;
export const getCommentErrorSelector = ( state: StateSchema ) => state.addNewComment?.error;
