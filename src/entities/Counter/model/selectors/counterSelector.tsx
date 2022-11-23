import { StateSchema } from "app/providers/StoreProvider";

export const reduxCounterSelector = ( state: StateSchema ) => state.counter;
