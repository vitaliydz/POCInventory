import { useReducer } from "react";
import { combineReducers } from "./combineReducers";
import { InventoryProjectionStateDataPartial } from "./partials/data";
import { InventoryProjectionStateFiltersPartial } from "./partials/filters";
import {
  InventoryProjectionStateParamsPartial,
  paramsReducer,
  initialParamsStatePartial
} from "./partials/params";

export interface InventoryProjectionState
  extends InventoryProjectionStateDataPartial,
    InventoryProjectionStateFiltersPartial,
    InventoryProjectionStateParamsPartial {}

const mainReducer = combineReducers({ paramsReducer });

const initialState: InventoryProjectionState = Object.assign(
  {},
  initialParamsStatePartial,
  {},
  {}
);

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(mainReducer, initialState);
};
