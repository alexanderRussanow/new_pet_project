import { classNames } from 'shared/lib/UtilityMethods';
//styles
import './Loader.scss';

interface LoaderProps {
    className?: string;
}

export const Loader: React.FC<LoaderProps> = ( { className } ) => (
    <div
        className={ classNames(
            'lds-ellipsis',
            {},
            [
                className
            ] 
        ) }>
        <div />
        <div />
        <div />
        <div />
    </div>
);
