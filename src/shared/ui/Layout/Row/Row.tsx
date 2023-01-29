import { Flex, FlexProps } from '../Flex/Flex';

export type OmitColumnProps = Omit<FlexProps, 'direction'>;
export interface RowProps extends OmitColumnProps {
    direction?: 'row' | 'rowReverse';
}

export const Row: React.FC<RowProps> = ( { direction, ...props } ) => {
    return (
        <Flex
            { ...props }
            direction={ direction || 'row' }>
            {props.children}
        </Flex>
    );
};
