import React, { lazy } from 'react';
import { AddNewCommentFormProps } from './AddNewCommentForm1';

export const AddNewCommentFormLazy1 = lazy<React.FC<AddNewCommentFormProps>>( () => import( './AddNewCommentForm1' ) );
