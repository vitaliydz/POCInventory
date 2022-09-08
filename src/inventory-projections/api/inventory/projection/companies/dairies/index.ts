import type { ResponseJSON } from "./interfaces/response.interface";
import type { InventoryProjectionCompaniesRepository } from "./interfaces/repository.interface";
import { mockResponse } from "./mocks/response.mock";

class MockedInventoryProjectionCompaniesRepository
  implements InventoryProjectionCompaniesRepository {
  getDairy(
    companyId: number,
    dairyId: number,
    params?: {}
  ): Promise<ResponseJSON> {
    return Promise.resolve(mockResponse);
  }
}

class APIInventoryProjectionCompaniesRepository
  implements InventoryProjectionCompaniesRepository {
  getDairy(
    companyId: number,
    dairyId: number,
    params?: {}
  ): Promise<ResponseJSON> {
    throw new Error("Method not implemented.");
  }
}

/**
 * @description A factory with the sanity check so that Mocks wont slip in to production build.
 * @param useMocks ignored for production builds
 * @param repository
 */
const createRepository = (
  useMocks = true
): InventoryProjectionCompaniesRepository => {
  if (process.env.NODE_ENV !== "production") {
    if (useMocks) return new MockedInventoryProjectionCompaniesRepository();
  }
  return new APIInventoryProjectionCompaniesRepository();
};

export const inventoryProjectionRepository = createRepository();
