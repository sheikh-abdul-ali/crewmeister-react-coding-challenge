export interface BaseModel extends Record<string, unknown> {
	id: number;
	createdAt?: string;
	updatedAt?: string;
}
