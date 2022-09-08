export interface ResponseJSON {
  futureInventories: FutureInventory[];
}

export interface ConfidenceInterval {
  lowerBound: number;
  upperBound: number;
}

export interface FutureInventoryValue {
  count: number;
  confidenceInterval: ConfidenceInterval;
}

export enum FutureInventoryKeys {
  MILKING_COW = "milkingCow",
  DRY_COW = "dryCow",
  CALVING_COW = "calvingCow",
  COWS_TO_DRY = "cowsToDry",
  CALVING_HEIFER = "calvingHeifer",
  SEXED_SEMEN_FEMALE_CALVES = "sexedSemenFemaleCalves",
  SEXED_SEMEN_MALE_CALVES = "sexedSemenMaleCalves",
  CONVENTIONAL_SEMEN_FEMALE_CALVES = "conventionalSemenFemaleCalves",
  CONVENTIONAL_SEMEN_MALE_CALVES = "conventionalSemenMaleCalves",
  ALL_BEEF_CALVES = "allBeefCalves"
}

type FutureInventoryMappedItems = {
  [key in FutureInventoryKeys]: FutureInventoryValue;
};

export interface FutureInventory extends FutureInventoryMappedItems {
  period: string;
}
