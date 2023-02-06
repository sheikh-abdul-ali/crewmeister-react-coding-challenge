export interface BaseFindDto {
	filters?: string | Record<string, unknown>;
	page: number;
	// findAll?: boolean;
	// include?: string[];
	// orderBy?: Record<string, unknown>;
	// perPage?: number;
	// select?: string[];
	// searchKeyword?: string;
}
