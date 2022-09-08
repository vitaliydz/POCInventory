import React from "react";
import { Actions } from "../types";

enum ActionTypes {
  ADD_FILTERS = "addFilters",
  CHANGE_FILTER_VALUE = "changeFilterValue"
}

type FiltersPayload = {
  [ActionTypes.ADD_FILTERS]: Array<Filter>;
  [ActionTypes.CHANGE_FILTER_VALUE]: Filter;
};

type Filter = {
  name: string;
  isSelected: boolean;
};

export interface InventoryProjectionStateFiltersPartial {
  filters: Array<{
    [key: string]: Filter;
  }>;
}

export const initialFiltersStatePartial: InventoryProjectionStateFiltersPartial = {
  filters: []
};

export const paramsReducer: React.Reducer<
  InventoryProjectionStateFiltersPartial,
  Actions<FiltersPayload>
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
