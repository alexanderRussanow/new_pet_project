import { Flex, FlexProps } from '../Flex/Flex';

export type OmitDirectionProps = Omit<FlexProps, 'direction'>;
export interface ColumnProps extends OmitDirectionProps {
    direction?: 'column' | 'columnReverse';
}

export const Column: React.FC<ColumnProps> = ( { direction, ...props } ) => {
    return (
        <Flex
            { ...props }
            direction={ direction || 'column' }>
            {props.children}
        </Flex>
    );
};
