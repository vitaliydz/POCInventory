import { ResponseJSON } from "./response.interface";
import { InventoryProjectionRequestParams } from "./request.interface";

export abstract class InventoryProjectionCompaniesRepository {
  abstract getDairy(
    companyId: number,
    dairyId: number,
    params?: InventoryProjectionRequestParams
  ): Promise<ResponseJSON>;
}
