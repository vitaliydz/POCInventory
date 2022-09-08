import {
  ResponseJSON,
  FutureInventoryValue,
  FutureInventoryKeys,
  FutureInventory
} from "../interfaces/response.interface";

const generateFutureInventoryValue = (): FutureInventoryValue => {
  const count = Math.round(Math.random() * 100);
  return {
    count,
    confidenceInterval: {
      upperBound: Math.round(count * 1.2),
      lowerBound: Math.round(count * 0.8)
    }
  };
};

const generateFutureInventory = (): FutureInventory => {
  /* TODO: Adjust to mimic the actual reponse period format */
  const period = new Date().toISOString();
  return Object.assign(
    {
      period
    },
    ...Object.values(FutureInventoryKeys).map((v) => ({
      [v]: generateFutureInventoryValue()
    }))
  );
};

const generateMockResponse = (amount = 6): ResponseJSON => ({
  futureInventories: new Array(amount)
    .fill(null)
    .map((_) => generateFutureInventory())
});

export const mockResponse: ResponseJSON = generateMockResponse(4);
