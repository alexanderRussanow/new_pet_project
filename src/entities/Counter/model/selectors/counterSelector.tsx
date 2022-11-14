import { StateSchema } from "app/providers/StoreProvider/config/stateSchema";

export const reduxCounterSelector = ( state: StateSchema ) => state.counter;
