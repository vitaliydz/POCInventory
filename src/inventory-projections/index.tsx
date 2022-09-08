import { mockResponse } from "./api/inventory/projection/companies/dairies/mocks/response.mock";

console.log(mockResponse);

export const InventoryProjections = () => (
  <div>{JSON.stringify(mockResponse)}</div>
);
