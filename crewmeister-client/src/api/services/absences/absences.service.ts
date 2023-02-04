import { BaseApiService, BaseFindDto } from "api/baseApiService";

import { Absence } from "models/absence.model";

import { URLS } from "../services.constants";

export class AbsencesService extends BaseApiService<Absence, BaseFindDto> {
	constructor(baseUrl: string) {
		super(baseUrl);
	}
}

export const absencesService = new AbsencesService(URLS.ABSENCES);
