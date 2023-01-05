import { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/utility/UtilityMethods';
import { Card, CardThemeEnum } from 'shared/ui/Card';
import { Row } from 'shared/ui/Layout';
// styles
import classes from './Tabs.module.scss';

export interface TabType {
    label: string;
    content: React.ReactNode;
}

export interface TabsProps {
    className?: string;
    tabs?: TabType[];
    value?: string;
    onTabClick?: ( tab: TabType ) => void;
}

export const Tabs: React.FC<TabsProps> = memo( ( { tabs, value, className, onTabClick } ) => {
    const onTabClickHandler = useCallback(
        ( tab: TabType ) => () => onTabClick && onTabClick( tab ),
        [
            onTabClick
        ]
    );

    return (
        <Row
            gap='small'
            className={ classNames(
                classes.Tabs,
                {},
                [
                    className
                ] 
            ) }>
            {tabs
                ? tabs.map( tab => (
                    <Card
                        className={ classes.tab }
                        key={ tab.label }
                        theme={ tab.label === value ? CardThemeEnum.DEFAULT : CardThemeEnum.OUTLINE }
                        onClick={ onTabClickHandler( tab ) }>
                        {tab.content}
                    </Card>
                ) )
                : null}
        </Row>
    );
} );
