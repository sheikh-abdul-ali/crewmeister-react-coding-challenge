import { BaseModel } from "./base.model";

export interface Absence extends BaseModel {
	admitterId?: number;
	admitterNote?: string;
	confirmedAt?: string;
	createdAt?: string;
	crewId?: number;
	endDate?: string;
	memberNote?: string;
	rejectedAt?: string;
	startDate?: string;
	type?: string;
	userId?: number;
}
