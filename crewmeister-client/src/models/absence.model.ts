import { BaseModel } from "./base.model";

export interface Absence extends BaseModel {
	admitterId?: number;
	admitterNote?: string;
	confirmedAt?: string;
	createdAt?: string;
	crewId?: number;
	endDate: string;
	memberNote?: string;
	name: string;
	rejectedAt?: string;
	status: string;
	duration: number;
	startDate: string;
	type: string;
	userId: number;
}
