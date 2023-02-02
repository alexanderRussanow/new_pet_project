import { Flex, FlexProps } from '../Flex/Flex';

export type OmitColumnProps = Omit<FlexProps, 'direction'>;
export interface RowProps extends OmitColumnProps {
    direction?: 'row' | 'rowReverse';
}

export const Row: React.FC<RowProps> = ( { direction, children, ...restProps } ) => {
    return (
        <Flex
            { ...restProps }
            direction={ direction || 'row' }>
            {children}
        </Flex>
    );
};
