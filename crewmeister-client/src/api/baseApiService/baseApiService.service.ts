import { BaseModel } from "models/base.model";

import { FindResponse } from "./baseApiService.model";
import { BaseFindDto } from "./dto";

import { request } from "../request";

export class BaseApiService<ItemModel extends BaseModel, FindDto extends BaseFindDto> {
	constructor(public baseUrl: string) {}

	get(data): Promise<FindResponse<ItemModel>> {
		return request(`${this.baseUrl}` + `?${new URLSearchParams(data).toString()}`, "GET") as Promise<
			FindResponse<ItemModel>
		>;
	}
}
