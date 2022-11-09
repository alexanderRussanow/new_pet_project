import { classNames } from 'shared/lib/UtilityMethods';
// styles
import classes from './PageLoader.module.scss';

interface PageLoaderProps {
    className?: string;
}

export const PageLoader: React.FC<PageLoaderProps> = ( { className, children } ) => {
    return <div
        className={ classNames(
            classes.pageLoader,
            {},
            [
                className
            ] 
        ) }>{children}</div>;
};
