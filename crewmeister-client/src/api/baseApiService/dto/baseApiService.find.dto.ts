export interface BaseFindDto {
	filters?: string | Record<string, unknown>;
	page: number;
}
