import React, { lazy } from 'react';
import { AddNewCommentFormProps } from './AddNewCommentForm';

export const AddNewCommentFormLazy = lazy<React.FC<AddNewCommentFormProps>>( () => import( './AddNewCommentForm' ) );
