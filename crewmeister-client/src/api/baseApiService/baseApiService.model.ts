export interface FindResponse<ItemModel extends Record<string, unknown>> {
	page?: number;
	perPage?: number;
	totalPages: number;
	totalItems?: number;
	items: ItemModel[];
	more?: boolean;
}
