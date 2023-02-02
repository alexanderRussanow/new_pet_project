import { Flex, FlexProps } from '../Flex/Flex';

export type OmitDirectionProps = Omit<FlexProps, 'direction'>;
export interface ColumnProps extends OmitDirectionProps {
    direction?: 'column' | 'columnReverse';
}

export const Column: React.FC<ColumnProps> = ( { direction, children, ...restProps } ) => {
    return (
        <Flex
            { ...restProps }
            direction={ direction || 'column' }>
            {children}
        </Flex>
    );
};
