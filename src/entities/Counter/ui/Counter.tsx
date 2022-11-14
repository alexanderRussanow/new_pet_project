import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'shared/ui/Button';
import { counterActions, reduxCounterSelector } from '..';

export const Counter: React.FC = () => {
    // redux hooks
    const DISPATCH = useDispatch();
    const value = useSelector( reduxCounterSelector );

    console.log(
        'VALUE => ',
        value 
    );

    const increment = () => {
        DISPATCH( counterActions.increment() );
    };

    const decrement = () => {
        DISPATCH( counterActions.decrement() );
    };

    return (
        <div data-testid='counter'>
            <h1 data-testid='counter-value'>{value.count}</h1>
            <Button
                data-testid='increment-button'
                onClick={ increment }>+</Button>
            <Button
                data-testid='decrement-button'
                onClick={ decrement }>-</Button>
        </div>
    );
};

