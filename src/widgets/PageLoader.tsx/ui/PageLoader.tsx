import { classNames } from 'shared/lib/utility/UtilityMethods';
import { Loader } from 'shared/ui/Loader';
// styles
import classes from './PageLoader.module.scss';

interface PageLoaderProps {
    className?: string;
}

export const PageLoader: React.FC<PageLoaderProps> = ( { className } ) => {
    return (
        <div
            className={ classNames(
                classes.pageLoader,
                {},
                [
                    className
                ] 
            ) }>
            <Loader />
        </div>
    );
};
