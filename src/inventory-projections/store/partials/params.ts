import React from "react";
import { Actions } from "../types";

enum ActionTypes {
  ADD_PARAMS = "addParams",
  UNDO_LAST_CHANGE = "undoLastChange",
  RESET_ALL = "resetAll"
}

export enum DefaultParamsDictionary {
  TODAY_DATE = "today_date",
  CULLING_RATE = "culling_rate",
  DRY_PERIOD = "dry_period",
  DEAD_ON_ARRIVAL = "dead_on_arrival",
  TWINNING_RATE = "twinning_rate",
  AVERAGE_SEXED_ACCURACY = "average_sexed_accuracy"
}

export interface DefaultParams {
  [DefaultParamsDictionary.TODAY_DATE]: string;
  [DefaultParamsDictionary.CULLING_RATE]: number;
  [DefaultParamsDictionary.DRY_PERIOD]: number;
  [DefaultParamsDictionary.DEAD_ON_ARRIVAL]: number;
  [DefaultParamsDictionary.TWINNING_RATE]: number;
  [DefaultParamsDictionary.AVERAGE_SEXED_ACCURACY]: number;
}

type ParamsPayload = {
  [ActionTypes.ADD_PARAMS]: Partial<DefaultParams>;
  [ActionTypes.RESET_ALL]: undefined;
  [ActionTypes.UNDO_LAST_CHANGE]: undefined;
};

export interface InventoryProjectionStateParamsPartial {
  params: {
    default: DefaultParams;
    updates: Array<Partial<DefaultParams>>;
  };
}

export const initialParamsStatePartial: InventoryProjectionStateParamsPartial = {
  params: {
    default: {
      [DefaultParamsDictionary.TODAY_DATE]: new Date().toISOString().slice(-1),
      [DefaultParamsDictionary.CULLING_RATE]: 0.3,
      [DefaultParamsDictionary.DRY_PERIOD]: 60,
      [DefaultParamsDictionary.DEAD_ON_ARRIVAL]: 0.05,
      [DefaultParamsDictionary.TWINNING_RATE]: 0.042,
      [DefaultParamsDictionary.AVERAGE_SEXED_ACCURACY]: 0.9
    },
    updates: [
      {
        [DefaultParamsDictionary.CULLING_RATE]: 0.1
      },
      {
        [DefaultParamsDictionary.DEAD_ON_ARRIVAL]: 0.1
      }
    ]
  }
};

const getter = Object.assign(
  {},
  initialParamsStatePartial.params.default,
  ...initialParamsStatePartial.params.updates
);

export const paramsReducer: React.Reducer<
  InventoryProjectionStateParamsPartial,
  Actions<ParamsPayload>
> = (state, action) => {
  switch (action.type) {
    case ActionTypes.ADD_PARAMS:
      return state;
    case ActionTypes.UNDO_LAST_CHANGE:
      return state;
    case ActionTypes.RESET_ALL:
      return state;

    default:
      throw new Error("Default Reducer Case!");
  }
};
