import { absencesService } from "api/services/absences";

export const fetchAbsence = async ({ page, date, type }: { page: number; date: string; type: string }) => {
	const filters = JSON.stringify({ date, type });
	const res = await absencesService.get({ page, filters }).catch(error => error);
	return res;
};
