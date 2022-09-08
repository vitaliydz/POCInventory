import React from "react";
import { Actions } from "../types";

enum ActionTypes {
  ADD_FILTERS = "addData",
  CHANGE_FILTER_VALUE = "changeFilterValue"
}

type DataPayload = {
  [ActionTypes.ADD_FILTERS]: Array<Filter>;
  [ActionTypes.CHANGE_FILTER_VALUE]: Filter;
};

type Filter = {
  name: string;
  isSelected: boolean;
};

export interface InventoryProjectionStateDataPartial {
  data: Array<{
    [key: string]: Filter;
  }>;
}

export const initialDataStatePartial: InventoryProjectionStateDataPartial = {
  data: []
};

export const paramsReducer: React.Reducer<
  InventoryProjectionStateDataPartial,
  Actions<DataPayload>
> = (state, action) => {
  switch (action.type) {
    case ActionTypes.ADD_FILTERS:
      return {
        filters: Object.assign({}, ...state.filters, action.payload)
      };
    case ActionTypes.CHANGE_FILTER_VALUE:
      return state;

    default:
      throw new Error("Default Reducer Case!");
  }
};
